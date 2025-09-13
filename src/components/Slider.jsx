import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import Image from "next/image"
import SliderForm from "./SliderForm"

function Slider() {
  return (
    <Swiper className="bg-white shadow-custom  w-[630px] h-[200px]">
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full ">
          <div className="relative xl:flex w-[90px] h-[90px] hidden">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              fill
              className="object-center"
              quality={100}
            />
          </div>

          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget, and high recommend.
            </p>
            <p className="font-primary font-semibold text-primary">Jone Doe</p>
          </div>
        </div>
      </SwiperSlide>

            <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full ">
          <div className="relative xl:flex w-[90px] h-[90px] hidden">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              fill
              className="object-center"
              quality={100}
            />
          </div>

          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget, and high recommend.
            </p>
            <p className="font-primary font-semibold text-primary">Jone Doe</p>
          </div>
        </div>
      </SwiperSlide>

            <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full ">
          <div className="relative xl:flex w-[90px] h-[90px] hidden">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              fill
              className="object-center"
              quality={100}
            />
          </div>

          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget, and high recommend.
            </p>
            <p className="font-primary font-semibold text-primary">Jone Doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SliderForm/>
    </Swiper>
  )
}

export default Slider
