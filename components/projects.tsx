"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleViewMore = () => {
    setVisibleProjects((prev) => (prev === 4 ? projectsData.length : 4));
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 overflow-hidden"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleViewMore}
          className=" bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          {visibleProjects === 4 ? "View More" : "View Less"}
        </button>
      </div>
    </section>
  );
}
