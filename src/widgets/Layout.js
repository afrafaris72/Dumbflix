import React from 'react'
import NavbarComponent from '../components/Navbar'

function Layout(props) {
  return (
    <>
        <NavbarComponent />
        {props.children}
    </>
  )
}

export default Layout