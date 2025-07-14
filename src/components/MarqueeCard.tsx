import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";

interface Props {
  title: string;
}

export default function MarqueeCard({ title }: Props) {
  return (
    <div className="flex gap-2 items-center mx-8">
      <span className="text-4xl md:text-9xl font-bold text-primary">{title}</span>
      <BsSuitDiamondFill className="text-gray-200" size={40} />
    </div>
  );
}
