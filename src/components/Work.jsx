import Image from "next/image"
import Pretitle from "./Pretitle"

const workData = [
  {
    img: '/assets/img/work/restoration.jpg',
    name: "restoration",
    description: "four short description",
    href: "",
  },
  {
    img: '/assets/img/work/construction.jpg',
    name: "construction",
    description: "four short description",
    href: "",
  },
  {
    img: '/assets/img/work/renovation.jpg',
    name: "renovation",
    description: "four short description",
    href: "",
  },
  {
    img: '/assets/img/work/consulting.jpg',
    name: "consulting",
    description: "four short description",
    href: "",
  },

]

function Work() {
  return (
    <div className='pt-16 xl:pt-32' id='projects'>
      <div className="container mx-auto">
        <div className="text-center max-w[540px] mx-auto xl:mb-20">
          <Pretitle text="Our work" center/>

          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p>
            Providing export services desipner to deliver quality and innovation
            in every project we undertake.
          </p>
        </div>
      </div>
      <div>
        {workData.map((item, index) => {
          return <div key={index}
          className="w-full h-[492px] flex-1 relative overflow-hidden group flex
          justify-center ">
            <Image src={item.img} fill className="object-cover"/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Work