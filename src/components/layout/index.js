import React from "react"

import GlobalStyles from '../../styles/global'
import Nav from '../nav/index'
import Footer from '../Footer'

import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({ children }) => {
 
  return (
    <>
      <GlobalStyles/>
      <Nav/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
