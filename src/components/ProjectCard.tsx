import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const categories = Array.isArray(project.category) 
    ? project.category 
    : [project.category];

  return (
    <div className="project-card group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card-image transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end">
          {categories.map(category => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="project-card-content">
        <div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <Button asChild variant="default" size="sm" className="flex-1">
            <Link to={`/projects/${project.id}`}>
              View Details
            </Link>
          </Button>
          
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button asChild variant="outline" size="icon" className="h-8 w-8">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <Github size={16} />
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild variant="outline" size="icon" className="h-8 w-8">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;