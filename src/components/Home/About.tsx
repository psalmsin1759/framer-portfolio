"use client";

import React, { useRef } from "react";
import { user, skills } from "@/utils/data";
import Skills from "../Skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleLine from "../shared/TitleLine";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate the header
      gsap.from(".about-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 80%",
        },
      });

      // Animate the paragraph
      gsap.from(".about-paragraph", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-paragraph",
          start: "top 80%",
        },
      });

      // Animate each skill card with stagger
      gsap.from(".skill-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col mt-10"
    >
     
      <TitleLine title="About" className="about-header" />

     
      <div className="flex gap-4 p-4 about-paragraph">
        <p className="text-gray-400">{user.about}</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <Skills skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
