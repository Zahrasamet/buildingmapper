'use client'

import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import { Link as ScrollLink } from "react-scroll";
import Socials from "./Socials";

const Links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center justify-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
      <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>
        </SheetHeader>
        <ul className="w-full flex flex-col gap-10 justify-center text-center">
          {Links.map((link, index) => (
            <li key={index} className="text-white uppercase font-primary font-medium tracking-[1.2px]">
              <ScrollLink
                to={link.path}
                smooth={true}
                spy={true}
                duration={500}
                className="cursor-pointer"
                activeClass="text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <Socials containerStyles="text-white text-xl flex gap-6"/>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavMobile;
