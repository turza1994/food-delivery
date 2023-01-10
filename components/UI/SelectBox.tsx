import Image from 'next/image'
import React from 'react'

interface IProps {
  className?: string
}

function SelectBox({ className }: IProps) {
  return (
    <div className={`${className}`}>
      <div className='relative inline-flex'>
        {/* <svg
          className='w-[14px] h-[14px] absolute top-0 right-0 m-4 pointer-events-none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 412 232'
        >
          <path
            d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
            fill='#648299'
            fill-rule='nonzero'
          />
        </svg> */}
        <Image
          className='absolute top-0 right-0 m-4 pointer-events-none'
          src='/arrow-down-icon.png'
          alt='arrow down icon'
          width={14}
          height={10}
        />
        <select className='w-[270px] px-[15px] py-[10px] border border-[#929292] rounded-[10px] text-[#929292] text-base font-semibold bg-white hover:border-gray-400 focus:outline-none appearance-none'>
          <option>Filters</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Black</option>
          <option>Orange</option>
          <option>Purple</option>
          <option>Gray</option>
          <option>White</option>
        </select>
      </div>
    </div>
  )
}

export default SelectBox
