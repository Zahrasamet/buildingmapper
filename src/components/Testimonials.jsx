import Image from "next/image"
import Button from "./Button"
import Pretitle from "./Pretitle"
import Slider from "./Slider"

function Testimonials() {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">

          {/* متن سمت چپ */}
          <div className="flex-1 max-w-[420px] xl:pt-[54px] mb-12 xl:mb-0">
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6">Built On Trust, Proved By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we’ve helped them bring
              their dreams to life with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </div>

          {/* عکس و اسلایدر سمت راست */}
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                fill
                className="object-cover"
                quality={100}
                alt=""
              />
            </div>
            <div className="relative xl:absolute xl:bottom-0 xl:right-[160px] max-w-max">
            <Image src='/assets/logo.svg' width={54} height={36}
              alt="" className="absolute z-20 -top-4 last-[60px]"
            />
              <Slider />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
