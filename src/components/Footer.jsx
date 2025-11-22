import Image from "next/image"
import Link from "next/link"

import { RiMapPin2Fill,
   RiPhoneFill,
    RiMailFill,
     RiArrowRightLine } from "react-icons/ri"

     import Socials from "./Socials"

function Footer() {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px]
        xl:gap-[30px]">
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.svg" width={250} height={48} alt=""/>
            </Link>
            <p className="text-border max-w-[210px]">
             Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl"/>
                <p>1258 Brickstone Ave. US</p>
              </li>

              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl"/>
                <p>1258 Brickstone Ave. US</p>
              </li>

              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl"/>
                <p>1258 Brickstone Ave. US</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">NewsLatter</h4>
         <p className="mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
         </p>

         <div className="relative max-w-[370px]">
          <input type="text" placeholder="Enter Your email" className="bg-[#222427]
          h-16 w-full pl-7 rounded-none outline-none flex items-center"/>
          <button className="bg-accent w-12 h-12 absolute top-2 right-2
           text-primary text-xl flex items-center justify-center">
            <RiArrowRightLine/>
           </button>
         </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex
      flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">Copyright &copy: 2025 UrbanBuild. All rights reserved</p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </footer>
  )
}

export default Footer
