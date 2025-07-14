import React from "react";

interface TitleProps {
  title: string;
  className?: string
}

export default function TitleLine({ title, className }: TitleProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div>
        <span className="text-primary text-2xl md:text-3xl font-semibold">
          {title}
        </span>
      </div>
      <div className="w-full flex">
        <div className="bg-gray-300 h-1 w-full"></div>
        <div className="bg-primary w-12" />
      </div>
    </div>
  );
}
