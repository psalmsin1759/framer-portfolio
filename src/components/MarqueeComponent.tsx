"use client";

import React from "react";
import { marqueeSkills } from "@/utils/data";
import MarqueeCard from "./MarqueeCard";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <div className="w-full flex flex-col gap-3 mt-10">
      <Marquee
        direction="left"
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        {marqueeSkills.map((marqueeSkill: string, index: number) => (
          <MarqueeCard key={index} title={marqueeSkill} />
        ))}
      </Marquee>

      <Marquee
        direction="right"
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        {marqueeSkills.map((marqueeSkill: string, index: number) => (
          <MarqueeCard key={index} title={marqueeSkill} />
        ))}
      </Marquee>
    </div>
  );
}
