import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import CartBar from '../Cart/CartBar'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [cartOpen, setCartOpen] = React.useState(false)

  return (
    <>
      <nav className='fixed w-full z-10 flex flex-wrap items-center justify-between bg-[#0C1712] sm:px-[108px]'>
        <div className='w-full flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white relative w-[128px] h-[65px]'
              href='#'
            >
              <Image
                src={'/logo.png'}
                fill={true}
                object-fit='contain'
                alt='logo'
              />
            </a>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image
                src='/nav-toggler.svg'
                alt='nav toggler'
                width={25}
                height={25}
              />
            </button>
          </div>
          <div
            className={
              'lg:flex items-center' + (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:mx-auto'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Home</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>About</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Menu</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Blog</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              'lg:flex items-center' + (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto items-center'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-facebook-square text-lg leading-5 text-white hover:opacity-75 relative w-[22px] h-[22px]'>
                    <Image
                      src='/search-icon.svg'
                      fill
                      object-fit='contain'
                      alt='search icon'
                    />
                  </i>
                </a>
              </li>
              <li className='nav-item' onClick={() => setCartOpen(!cartOpen)}>
                <a className='px-3 py-2 flex items-center text-lg font-normal leading-5 text-white hover:opacity-75 cursor-pointer'>
                  <i className='fab fa-facebook-square text-lg leading-5 text-white hover:opacity-75 relative w-[22px] h-[22px]'>
                    <Image
                      src='/cart-icon.svg'
                      fill
                      object-fit='contain'
                      alt='cart icon'
                    />
                    <div className='h-[8px] w-[8px] absolute right-0 bg-[#F3BA00] rounded-full'></div>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`absolute top-[100%] right-0 transition-all duration-200 ease-in ${
            !cartOpen && 'hidden '
          }`}
        >
          <CartBar />
        </div>
      </nav>
    </>
  )
}

export default Navbar
