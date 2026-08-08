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
    <section id="projects" className="w-full py-12">
      <div className="flex min-h-0 flex-col gap-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="border bg-foreground text-background z-10 rounded-xl px-4 py-1 mx-2">
                <span className="text-sm font-medium">My Projects</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites to
                complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
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
    </section>
  );
}
