"use client";

import React, { useEffect, useRef } from "react";
import { Education, educations } from "@/utils/data";
import EducationCard from "./EducationCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleLine from "../shared/TitleLine";

gsap.registerPlugin(ScrollTrigger);

export default function EducationHome() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experiences-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experiences-header",
          start: "top 80%",
        },
      });

      gsap.from(".experience-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experiences-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col mt-16">
      <TitleLine title="Education" className="experiences-header" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 experiences-grid">
        {educations.map((education: Education, index: number) => (
          <div key={index} className="experience-card">
            <EducationCard education={education} />
          </div>
        ))}
      </div>
    </div>
  );
}
