import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="flex justify-between">
      <li className="flex gap-6 md:flex-row flex-col">
        {navLinks.map((link) => (
          <Link
            className="
              after:bg-black
              after:w-full
              after:h-[2px]
              after:scale-0
              after:block
              hover:after:scale-100
              after:transition-all
              after:duration-200"
            href={link.route}
          >
            {link.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default NavLinks;
