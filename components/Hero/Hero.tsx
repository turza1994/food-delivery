import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    // <div className='min-h-[90vh] bg-[#0C1712] text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 sm:gap-20 sm:px-[80px] xl:px-[132px]'>
    <div className='min-h-[90vh] bg-[#0C1712] text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 sm:gap-20 px-[30px] sm:px-[80px] xl:px-[132px]'>
      <div className='flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start'>
        <h1 className='max-w-[534px] text-[50px] sm:text-[70px] leading-[62px] sm:leading-[82px] font-gilroy'>
          Authentic Home food in UK
        </h1>
        <p className='mt-[32px] max-w-[441px] leading-[20px] tracking-[-0.012em]'>
          What2Eat is a courier service in which authentic home cook food is
          delivered to a customer.
        </p>
        <div className='mt-[40px] flex items-center'>
          <input
            type='text'
            placeholder='Search food you love'
            className='w-[200px] h-[58px] sm:w-[344px] sm:h-[58px] pl-[22px] rounded-l-[10px]'
          />
          <button className='w-[80px] h-[58px] sm:w-[112px] sm:h-[58px] bg-[#F3BA00] rounded-r-[10px] font-[600px] leading-[20px] tracking-[-1.2%]'>
            Search
          </button>
        </div>
      </div>
      <div className=''>
        <Image
          src='/hero-image.svg'
          width={521.63}
          height={435.49}
          alt='Hero Image'
        />
      </div>
    </div>
  )
}

export default Hero
