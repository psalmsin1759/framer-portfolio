"use client";

import React, { useEffect, useRef } from "react";
import { Project, projects } from "@/utils/data";
import ProjectCard from "../Project/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".projects-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
        },
      });

      // Animate each project card
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col mt-10">
      <div className="flex items-center gap-6 projects-header">
        <div>
          <span className="text-primary text-2xl md:text-3xl font-semibold">
            Projects
          </span>
        </div>
        <div className="w-full flex">
          <div className="bg-gray-300 h-1 w-full"></div>
          <div className="bg-primary w-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 projects-grid">
        {projects.map((project: Project, index: number) => (
          <div key={index} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
