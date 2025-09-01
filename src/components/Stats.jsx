"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"

const statsData = [
  { endCountNum: 99, endCountText: "N", text: "Client Satisfaction" },
  { endCountNum: 500, endCountText: "+", text: "Successful Projects" },
  { endCountNum: 32, endCountText: "K", text: "Happy Clients" },
  { endCountNum: 26, endCountText: "+", text: "Years of Experience" }
]

function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2 })

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {statsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl font-bold">
              {inView && (
                <CountUp
                  start={0}
                  end={item.endCountNum}
                  duration={2.5}
                  suffix={item.endCountText}
                />
              )}
            </div>
            <p className="mt-2 text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
