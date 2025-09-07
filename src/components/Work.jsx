import Image from "next/image"
import Link from "next/link"
import Pretitle from "./Pretitle"
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri"

const workData = [
  {
    img: '/assets/img/work/restoration.jpg',
    name: "restoration",
    description: "four short description",
    href: "#",
  },
  {
    img: '/assets/img/work/construction.jpg',
    name: "construction",
    description: "four short description",
    href: "#",
  },
  {
    img: '/assets/img/work/renovation.jpg',
    name: "renovation",
    description: "four short description",
    href: "#",
  },
  {
    img: '/assets/img/work/consulting.jpg',
    name: "consulting",
    description: "four short description",
    href: "#",
  },
]

function Work() {
  return (
    <div className='pt-16 xl:pt-32' id='projects'>
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Our work" center />

          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[400px] mx-auto">
            Providing export services designed to deliver quality and innovation
            in every project we undertake.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt={item.name}
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center
               text-white md:translate-y-[100px] md:group-hover:translate-y-0 transition-all
               duration-500">
                <div className="pl-8">
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[44px] bg-accent text-primary text-2xl flex justify-center items-center"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
