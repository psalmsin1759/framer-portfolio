"use client";

import { Project } from "@/utils/data";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="w-full relative h-60 overflow-hidden rounded-lg cursor-pointer"
    >
      <Image
        src={project.imagePath || "/images/placeholder.png"}
        alt={project.title}
        fill
        className="object-cover"
      />

      <motion.div
        variants={{
          rest: { x: "-100%" },
          hover: { x: 0 },
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="absolute bottom-0 left-0  bg-primary bg-opacity-80 p-4 rounded-t-md"
      >
        <span className="text-black font-semibold">{project.title}</span>
      </motion.div>
    </motion.div>
  );
}
