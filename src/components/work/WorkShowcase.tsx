import React from "react";
import WorkGrid from "@/components/modules/WorkGrid";
import { Project, projects as defaultProjects } from "@/data/projects";

export interface WorkShowcaseProps {
  projects?: Project[];
}

export default function WorkShowcase({ projects = defaultProjects }: WorkShowcaseProps) {
  return (
    <section className="w-full bg-surface-canvas pt-10 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkGrid projects={projects} />
      </div>
    </section>
  );
}
