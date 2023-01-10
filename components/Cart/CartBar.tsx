import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import SingleCartItem from './SingleCartItem'

function CartBar() {
  const { cartItems } = useAppSelector((state) => state.cart)
  const cartItemsArray = cartItems && Object.keys(cartItems)

  return (
    <div className='bg-white h-[300px] w-[300px] rounded-b-[10px] shadow-md shadow-gray-400 flex flex-col'>
      <h3 className='p-2'>Cart Items:</h3>
      <div className='overflow-auto'>
        {cartItemsArray.map((id: any) => (
          <SingleCartItem key={id} data={cartItems[id]} />
        ))}
      </div>
      {/* <p className='my-auto text-center'>Subtotal Price: ${subtotal}</p> */}
      <button className='my-auto bg-[#F3BA00]'>Checkout</button>
    </div>
  )
}

export default CartBar
