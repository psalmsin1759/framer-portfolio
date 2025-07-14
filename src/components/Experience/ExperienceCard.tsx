import { Experience } from "@/utils/data";
import React from "react";

interface ExperienceProps {
  experience: Experience;
}
export default function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-xl">{experience.title}</p>
      <p className="text-gray-600">{experience.company}</p>
      <div>
        <span className="text-gray-400">{experience.start} - {experience.end}</span> 
      </div>
      <p className="text-sm"> {experience.responsibility}</p>
      <hr className="mt-2 text-gray-200"/>
    </div>
  );
}
