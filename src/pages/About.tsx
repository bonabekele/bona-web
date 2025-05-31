import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certificates, education, profile } from "@/lib/data";
import { Award, GraduationCap } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* About section */}
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="w-64 h-64 rounded-lg overflow-hidden">
                    <img
                      src="/cult.jpg"
                      alt="Bona Bekele"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-secondary/10"></div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                  About Me
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {profile.bio}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  As a versatile professional with a passion for both technology
                  and creativity, I bring a unique blend of technical expertise
                  and artistic vision to every project. My background in BME,
                  AI, ML allows me to approach problems from multiple angles,
                  resulting in solutions that are both functional and
                  aesthetically pleasing.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding or designing, you can find me hiking in
                  the mountains, experimenting with new recipes, or attending
                  national tech meetups and science museums. I'm always seeking
                  new challenges and opportunities to grow both personally and
                  professionally.
                </p>
              </div>
            </div>
          </section>

          {/* Education section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <CardTitle>
                      {edu.degree} in {edu.field}
                    </CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications section */}
          <section>
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center">
              <Award className="mr-2" /> Certifications & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <Card
                  key={cert.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        View Certificate
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
