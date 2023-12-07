import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import "./Header.css"

function Header() {
  return (
    <header>
        <Navbar />
        <Banner />
    </header>
  )
}

export default Header