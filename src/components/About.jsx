import Image from 'next/image'
import Pretitle from './Pretitle'
import Button from './Button'

function About() {
  return (
    <div className='pt-16 xl:pt-32' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center'>

          {/* سمت چپ: متن */}
          <div className='flex-1'>
            <div className='max-w-[540px]'>
              <Pretitle text="About us"/>
              <h2 className='h2 mb-6'>Focused On Excellence In Every Project</h2>
              <p className='mb-11'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente 
                blanditiis accusantium, aliquid unde officia veritatis distinctio,
                aspernatur iusto repellat ducimus voluptatum.
              </p>
            </div>

            <div className='w-max flex flex-col text-right mb-10'>
              <Image 
                src="/assets/img/about/signature.svg"
                width={154} 
                height={38} 
                alt="Signature"
              />
              <p>Company CEO</p>
            </div>

            <Button text="Contact Us"/>
          </div>

          {/* سمت راست: تصویر */}
          <div className='flex-1 xl:flex xl:justify-center'>
            <div className='xl:w-[444px] xl:h-[493px] relative'>
              {/* پس‌زمینه رنگی */}
              <div className='hidden xl:flex w-[444px] h-[495px] bg-accent absolute -top-4 -left-4 -z-10'></div>

              {/* تصویر */}
              <Image
                src="/assets/img/about/img.jpg"
                fill
                alt="About image"
                className='object-cover rounded-xl'
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
