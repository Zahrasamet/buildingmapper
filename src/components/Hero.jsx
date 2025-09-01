import React from 'react'
import Button from './Button'   // مسیر درست فایل Button رو بذار

function Hero() {
  return (
    <section className='h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative'>
      <div className='absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10'></div>

      <div className='container mx-auto h-full flex items-center'>
        <div className='z-20 text-white text-center xl:text-left mx-auto xl:mx-0
        flex flex-col items-center xl:items-start max-w-[600px]'>
          <h1 className='h1 text-white mb-4'>
            <span className='text-accent'>Building</span> robust lasting solutions
          </h1>
          <p className='mb-9'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus. Architecto 
            voluptate, cumque voluptas mollitia, alias placeat 
          </p>

          <div>
            <Button text="See our work"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
