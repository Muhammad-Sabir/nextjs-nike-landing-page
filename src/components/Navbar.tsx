import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headerLogo } from "@/public/assets/images";
import { hamburger } from "@/public/assets/icons";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="padding-x absolute z-50 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={headerLogo} alt="logo" width={130} height={29} />
        </Link>

        <ul className="centered-flex flex-1 gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="z-50 font-montserrat text-lg leading-normal text-slate-gray hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:flex">
          <Image src={hamburger} alt="Hamberger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
