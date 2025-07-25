"use client";

import React, { useEffect, useRef } from "react";
import { Experience, experiences, user } from "@/utils/data";
import ExperienceCard from "./ExperienceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleLine from "../shared/TitleLine";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceComp() {
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
    <div ref={containerRef} className="flex flex-col mt-10">
      <TitleLine title="Experiences" className="experiences-header" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 experiences-grid">
        {experiences.map((experience: Experience, index: number) => (
          <div key={index} className="experience-card">
            <ExperienceCard experience={experience} />
          </div>
        ))}
      </div>

      <div className=" flex gap-6  md:gap-24 m-20">
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-primary text-2xl md:text-6xl font-semibold">
            {user.completedProjects}+
          </p>
          <p className="text-primary">Projects Completed</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-primary text-2xl md:text-6xl font-semibold">
            {user.satisfiedCustomer}+
          </p>
          <p className="text-primary">Satisfied Clients</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-primary text-2xl md:text-6xl font-semibold">
            {user.positiveReviews}+
          </p>
          <p className="text-primary">Positive Reviews</p>
        </div>
      </div>
    </div>
  );
}
