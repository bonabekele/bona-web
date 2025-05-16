import { Button } from "@/components/ui/button";
import { Category, Project } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  title = "Featured Projects",
  subtitle = "Check out some of my recent work",
  limit = 4,
  showViewAll = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "AI",
    "Web Development",
    "Graphic Design",
    "Video Editing",
  ];

  const filteredProjects = projects
    .filter((project) => {
      if (activeCategory === "All") return true;

      if (Array.isArray(project.category)) {
        return project.category.includes(activeCategory);
      }

      return project.category === activeCategory;
    })
    .slice(0, limit);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all projects button */}
        {showViewAll && (
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
