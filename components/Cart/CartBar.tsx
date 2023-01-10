import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import SingleCartItem from './SingleCartItem'

function CartBar() {
  const { cartItems } = useAppSelector((state) => state.cart)
  const cartItemsArray = cartItems && Object.keys(cartItems)
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setSubtotal(
      cartItemsArray.reduce(
        (pv: any, cv: any) => pv + cartItems[cv].totalPrice,
        0
      )
    )
  }, [cartItems, cartItemsArray])

  return (
    <div className='bg-white h-fit w-[300px] shadow-md shadow-gray-400 flex flex-col text-[#929292]'>
      <h3 className='p-2'>Cart Items:</h3>
      <div className='overflow-auto'>
        {cartItemsArray.map((id: any) => (
          <SingleCartItem key={id} data={cartItems[id]} />
        ))}
      </div>
      <p className='my-auto text-center py-2'>
        Subtotal Price:{' '}
        <span className='text-black font-semibold'>${subtotal}</span>
      </p>
      <button className='my-auto py-2 font-semibold bg-[#F3BA00] text-black'>
        Checkout
      </button>
    </div>
  )
}

export default CartBar
