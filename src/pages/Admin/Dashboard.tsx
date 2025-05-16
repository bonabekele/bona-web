import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Award,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      toast({
        title: "Authentication required",
        description: "Please login to access the dashboard",
        variant: "destructive",
      });
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-heading">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <Tabs defaultValue="profile">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="projects">
              <FolderKanban className="mr-2 h-4 w-4" /> Projects
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" /> Education
            </TabsTrigger>
            <TabsTrigger value="certificates">
              <Award className="mr-2 h-4 w-4" /> Certificates
            </TabsTrigger>
            <TabsTrigger value="messages">
              <Mail className="mr-2 h-4 w-4" /> Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Overview</CardTitle>
                <CardDescription>
                  Quick access to your portfolio statistics and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Projects</CardDescription>
                      <CardTitle className="text-3xl">6</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Unread Messages</CardDescription>
                      <CardTitle className="text-3xl">1</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Last Updated</CardDescription>
                      <CardTitle className="text-lg">
                        Today at 10:30 AM
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and bio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      defaultValue="Full Stack Developer & Creative Professional"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={5}
                      defaultValue="Versatile professional with expertise spanning AI, web development, graphic design, and video editing. Passionate about creating innovative solutions that blend technology and creativity to solve complex problems."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>

                  <div className="flex justify-end">
                    <Button type="button">Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>
                    Manage your portfolio projects
                  </CardDescription>
                </div>
                <Button>Add Project</Button>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You currently have 6 projects in your portfolio.
                </p>
                <div className="border rounded-md divide-y">
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        AI-Powered Image Generator
                      </h3>
                      <p className="text-sm text-muted-foreground">AI</p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">E-Commerce Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        Web Development
                      </p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>
                    Manage your educational background
                  </CardDescription>
                </div>
                <Button>Add Education</Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md divide-y">
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Degree of BSc in BME</h3>
                      <p className="text-sm text-muted-foreground">
                        Addis Ababa University, 2021-2025
                      </p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">AI and ML</h3>
                      <p className="text-sm text-muted-foreground">
                        Self-Tutor, 2021-present
                      </p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Certificates & Achievements</CardTitle>
                  <CardDescription>
                    Manage your certifications and awards
                  </CardDescription>
                </div>
                <Button>Add Certificate</Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md divide-y">
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        Google Professional Machine Learning Engineer
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Google, 2025
                      </p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>
                  View and manage messages from the contact form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md divide-y">
                  <div className="p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Bona Bek</h3>
                      <span className="text-sm text-muted-foreground">
                        June 15, 2023
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      bekelebona058@gmail.com
                    </p>
                    <p className="border-l-4 border-muted pl-3 py-2 bg-muted/20">
                      Hi, I would like to discuss a potential project for my
                      company.
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        Reply
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium font-semibold">
                        Michael Johnson
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        June 10, 2023
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      michael@example.com
                    </p>
                    <p className="border-l-4 border-primary pl-3 py-2 bg-primary/5">
                      I am impressed by your portfolio. Would you be available
                      for a freelance project next month?
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        Reply
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
