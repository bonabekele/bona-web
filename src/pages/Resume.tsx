import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { resumeData } from "@/lib/data";
import { Download, Upload } from "lucide-react";
import React, { useRef, useState } from "react";

const Resume: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const downloadResume = () => {
    if (resumeFile) {
      // Create a URL for the file
      const url = URL.createObjectURL(resumeFile);
      const a = document.createElement("a");
      a.href = url;
      a.download = resumeFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // This would normally generate or fetch a PDF
      console.log("No resume file uploaded yet");
      toast({
        title: "No Resume Available",
        description: "Please upload a resume PDF first.",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        setResumeFile(file);
        toast({
          title: "Resume Uploaded",
          description: `Your resume "${file.name}" has been uploaded successfully.`,
        });
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold font-heading">Resume</h1>
            <div className="flex space-x-4">
              <Button onClick={triggerFileInput} variant="outline">
                <Upload className="mr-2 h-4 w-4" /> Upload PDF
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </Button>
              <Button onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </div>
          </div>

          {resumeFile && (
            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium">
                Current Resume: {resumeFile.name}
              </p>
            </div>
          )}

          <Card className="border border-border mb-12 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-heading mb-2">
                {resumeData.profile.firstName} {resumeData.profile.lastName}
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                {resumeData.profile.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {resumeData.profile.email} • {resumeData.profile.phone} •{" "}
                {resumeData.profile.location}
              </p>
            </div>

            <Separator className="my-6" />

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-heading mb-3">
                Professional Summary
              </h3>
              <p className="text-muted-foreground">{resumeData.profile.bio}</p>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-heading mb-3">
                Work Experience
              </h3>
              <div className="space-y-6">
                {resumeData.workExperience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h4 className="font-medium">{exp.position}</h4>
                        <p className="text-muted-foreground">
                          {exp.company}, {exp.location}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-heading mb-3">
                Education
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h4 className="font-medium">
                          {edu.degree} in {edu.field}
                        </h4>
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                    <p className="mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-heading mb-3">
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.slice(0, 8).map((skill) => (
                  <div key={skill.id} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span>{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}/5
                      </span>
                    </div>
                    <Progress value={skill.level * 20} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-heading mb-3">
                Languages
              </h3>
              <p>{resumeData.languages.join(", ")}</p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-lg font-semibold font-heading mb-3">
                Interests
              </h3>
              <p>{resumeData.interests.join(", ")}</p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
