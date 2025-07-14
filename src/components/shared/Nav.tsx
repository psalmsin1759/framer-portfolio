import React from "react";
import { menuItems, Menu } from "@/utils/data";
import { useRouter } from "next/navigation";

interface MenuProps {
  toggle: () => void;
  isMenuOpen: boolean;
}

export default function Nav({ toggle, isMenuOpen }: MenuProps) {
  const router = useRouter();

  const handleNav = (item: Menu) => {
    toggle();
    router.push(item.path);
  };

  return (
    <div
      className={`absolute left-0 right-0 bg-[var(--color-bg)] shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
      }`}
    >
      <ul className="text-[var(--color-text)] text-lg flex flex-col gap-4 p-6">
        {menuItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <button onClick={() => handleNav(item)}>{item.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}