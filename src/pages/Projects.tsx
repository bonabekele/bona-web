import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import { projects } from "@/lib/data";
import React, { useEffect, useState } from "react";

const Projects: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading state for animation
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold font-heading mb-4">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work across various domains including AI, web
              development, graphic design, and video editing.
            </p>
          </header>

          <ProjectsSection
            projects={projects}
            showViewAll={false}
            title=""
            subtitle=""
            limit={20}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
