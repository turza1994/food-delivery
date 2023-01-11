import Image from 'next/image'
import React from 'react'
import { addToCart } from '../../redux/cartSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

function SingleProduct({ data }: any) {
  const dispatch = useAppDispatch()
  const { name, image, price } = data

  const handleAddToCart = () => {
    data = { ...data, qty: 0, totalPrice: 0, totalVat: 0 }
    dispatch(addToCart(data))
  }

  return (
    <div className='hover:shadow-lg rounded-t-[10px] cursor-pointer transition duration-100 ease-in relative overflow-hidden'>
      <div className='w-[277px] h-[250px] overflow-hidden relative rounded-t-[10px]'>
        <Image src={image} fill alt='food image' />
      </div>
      <div className='px-[12px] py-[15px]'>
        <div className='text-base font-normal leading-[20px] tracking-[-1.2%] text-[#1B1C21] flex justify-between'>
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <div className='mt-[20px] px-[6px] text-xs font-normal leading-[20px] tracking-[-1.2%] text-[#1B1C21] flex justify-between items-center'>
          <span className='flex gap-x-[16px]'>
            <span className='flex items-center gap-[6px]'>
              <Image
                src='/star-icon.png'
                alt='star icon'
                width={12}
                height={12}
              />
              <span>4.7</span>
            </span>
            <span>50-79 min</span>
          </span>
          <button
            onClick={handleAddToCart}
            className='bg-[#F3BA00] rounded-[5px] p-[5px]'
          >
            <Image
              src='/plus-icon.png'
              alt='star icon'
              width={11}
              height={11}
            />
          </button>
        </div>
      </div>
      <div className='h-[30px] w-[32px] text-xs absolute top-0 left-[-1px] bg-[#F3BA00] flex items-center justify-center'>
        20%
      </div>
    </div>
  )
}

export default SingleProduct
