"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

interface ProjectsSectionProps {
  projects: typeof DATA.projects;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 4);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {visibleProjects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={id < 4 ? BLUR_FADE_DELAY * 12 + id * 0.05 : 0}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
      {projects.length > 4 && (
        <div className="flex justify-center">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full px-6 gap-2 text-xs font-medium cursor-pointer shadow-sm bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Load more..
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
