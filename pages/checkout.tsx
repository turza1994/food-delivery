import React from 'react'
import { useAppSelector } from '../redux/hooks'
import SingleCartItem from '../components/Cart/SingleCartItem'

function Checkout() {
  const { cartItems, price, vat, total } = useAppSelector((state) => state.cart)
  const cartItemsArray = cartItems && Object.keys(cartItems)

  return (
    <div className='pt-[65px]'>
      <div className='mt-20'>
        <h1 className='flex items-center justify-center font-bold text-md lg:text-3xl'>
          Checkout
        </h1>
      </div>
      <div className='container p-12 mx-auto'>
        <div className='flex flex-col w-full px-0 mx-auto md:flex-row'>
          <div className='flex flex-col md:w-full'>
            <h2 className='mb-4 font-bold md:text-xl text-heading '>
              Shipping Address
            </h2>
            <form className='justify-center w-full mx-auto'>
              <div className=''>
                <div className='space-x-0 lg:flex lg:space-x-4'>
                  <div className='w-full lg:w-9/12'>
                    <label
                      htmlFor='name'
                      className='block mb-3 text-sm font-semibold text-gray-500'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      placeholder='First Name'
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                    />
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='w-full lg:w-9/12'>
                    <label
                      htmlFor='phone'
                      className='block mb-3 text-sm font-semibold text-gray-500'
                    >
                      Phone
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      type='tel'
                      placeholder='Phone'
                      className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                    />
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='w-full lg:w-9/12'>
                    <label
                      htmlFor='address'
                      className='block mb-3 text-sm font-semibold text-gray-500'
                    >
                      Address
                    </label>
                    <textarea
                      className='w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                      id='address'
                      name='address'
                      cols={20}
                      rows={4}
                      placeholder='Address'
                    ></textarea>
                  </div>
                </div>

                <div className='mt-4'>
                  <button className='w-full lg:w-9/12 rounded-[10px] font-semibold px-6 py-3 text-black bg-[#F3BA00] hover:opacity-80'>
                    Process
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5'>
            <div className='pt-12 md:pt-0 2xl:ps-4'>
              <h2 className='text-xl font-bold'>Order Summary</h2>
              <div className='mt-8'>
                <div className='flex flex-col space-y-4'>
                  {cartItemsArray.map((id: any) => (
                    <SingleCartItem key={id} data={cartItems[id]} />
                  ))}
                </div>
              </div>

              <div className='flex mt-8'>
                <h2 className='text-xl font-bold'>Billing</h2>
              </div>
              <div className='flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                Subtotal<span className='ml-2'>{price}</span>
              </div>
              <div className='flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                Vat<span className='ml-2'>{vat}</span>
              </div>
              <div className='flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                Total<span className='ml-2'>{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
