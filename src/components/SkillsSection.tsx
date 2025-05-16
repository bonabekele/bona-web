import { Progress } from '@/components/ui/progress';
import { Skill } from '@/lib/types';
import React from 'react';

interface SkillsSectionProps {
  skills: Skill[];
  title?: string;
  subtitle?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  skills,
  title = "Skills & Expertise",
  subtitle = "Key technologies and tools I work with"
}) => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold font-heading mb-4">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}/5</span>
                    </div>
                    <Progress value={skill.level * 20} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;