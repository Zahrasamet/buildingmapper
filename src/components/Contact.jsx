import { RiChat1Line, RiMapLine, RiPhoneLine } from "react-icons/ri"
import Form from "./Form"
import Socials from "./Socials"

function Contact() {
  return (
    <div className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div
          className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px]
        xl:py-[36px] border-t-4 border-accent"
        >
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* Left side */}
            <div
              className="w-full xl:max-w-[480px] xl:pr-[70px] xl:border-r
            xl:border-border/40 h-[640px]"
            >
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor.
              </p>

              <div className="flex flex-col gap-[40px] mb-16">
                {/* Chat */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[20px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help</p>
                    <p className="font-semibold text-primary">hi@urbanbuild</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapLine className="text-[20px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at our office</p>
                    <p className="font-semibold text-primary">
                      1258 Brickstone Ave, Dallas, TK 75201, USA
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiPhoneLine className="text-[20px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon–Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </div>

             
              <Socials containerStyles="flex gap-[40px]"
                iconStyle="text-primary text-[20px]"
              />
            </div>

            {/* Right side */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
