import React from 'react'
import Navbar from './Navbar'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

function Layout({ children }: IProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
