import { Education } from "@/utils/data";
import React from "react";

interface EducationProps {
  education: Education;
}
export default function EducationCard({ education }: EducationProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-xl">{education.title}</p>
      <p className="text-gray-600">{education.school}</p>
      <div>
        <span className="text-gray-400">{education.start} - {education.end}</span> 
      </div>
      <hr className="mt-2 text-gray-200"/>
    </div>
  );
}
