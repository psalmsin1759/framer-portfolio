import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import ProjectComponent from "@/components/Home/ProjectComponent";
import ExperienceComp from "@/components/Experience/ExperienceComp";
import MarqueeComponent from "@/components/MarqueeComponent";
import EducationHome from "@/components/Education/EducationHome";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectComponent />
      <ExperienceComp />
      <MarqueeComponent />
      <EducationHome />
    </div>
  );
}
