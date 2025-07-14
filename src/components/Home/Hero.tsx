"use client";

import React from "react";
import { user } from "@/utils/data";
import Image from "next/image";
import { BsSuitDiamondFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Hero() {
  const fullName = user.name;
  const [firstName, lastName] = fullName.split(" ");

  return (
    <div className="w-full  relative md:min-h-screen flex flex-col items-center mt-10 gap-4 overflow-hidden">
     
      <motion.span
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
        className="text-gray-400 text-sm md:text-base"
      >
        {user.title}
      </motion.span>

     
      <div className="flex flex-col items-center mt-2">
        
        <motion.span
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary text-8xl md:text-[200px] font-semibold leading-none"
        >
          {firstName}
        </motion.span>

       
        <motion.span
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-primary text-8xl md:text-[200px] font-semibold leading-none"
        >
          {lastName}
        </motion.span>
      </div>

     
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-24 md:top-34"
      >
        <Image
          src={user.imagePath}
          alt={user.name}
          height={100}
          width={100}
          className="rounded-full w-20 h-28 md:w-44 md:h-52"
        />
      </motion.div>

      
      <BsSuitDiamondFill className="text-primary" size={40} />

     
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-4 max-w-2xl text-center px-4"
      >
        {user.description}
      </motion.span>
    </div>
  );
}
