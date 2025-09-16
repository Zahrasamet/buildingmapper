import FaqItem from "./FaqItem"
import Pretitle from "./Pretitle"
import { motion } from "framer-motion"

const faqItemData = [
  {
    title: "How Long does a construction project usually take?",
    description: "Timelines vary based on project size and complexity",
  },
  {
    title: "Do I need permits for my project?",
    description: "Depends on location and project type",
  },
  {
    title: "What materials do you use?",
    description: "We source high-quality, durable, and safe materials.",
  },
  {
    title: "Can I make changes after construction starts?",
    description: "Small changes are possible but may affect cost and timeline.",
  },
  {
    title: "How much will my construction project cost?",
    description: "We provide detailed estimates after reviewing your plans.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description: "We follow strict safety standards and quality checks.",
  },
]

const faqItemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
}


function Faq() {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">

      <div className="text-center max-w-[540px] mx-auto xl:mb-20">
        <Pretitle text="Faq" center/>
        <h2 className="h2 mb-3">Get Questions? We've Got You Covered</h2>
        <p className="mb-11 max-w-[480px] mx-auto">
          form project planning to final touches, we're answered the most 
          common questions to help you make decisions.
        </p>  
      </div>

<ul className="w-full flex flex-col">
  {faqItemData.map((item, index) => {
    return <li key={index}>
      <FaqItem title={item.title} description={item.description}/>
    </li>
  })}
</ul>
      </div>
    </section>
  )
}

export default Faq