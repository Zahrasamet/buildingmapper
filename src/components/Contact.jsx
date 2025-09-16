import Form from "./Form"
import Socials from "./Socials"

function Contact() {
  return (
    <div className="pt-16 xl:pt-32" is="contact">
      <div className="container mx-auto">
      <div>

      <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] 
        xl:py-[30px] border-t-4 border-accent">info</div>

        <div className="flex-1">
          <h2 className="h2 mb-3">Request A Quote</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             adipiscing elit. Sed do eiusmod tempor .
          </p>
          <Form/>
        </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Contact