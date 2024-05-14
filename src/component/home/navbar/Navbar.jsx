import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Navbar.css"

const Navbar = ({ toggleHighlights }) => {
  return (
    <div className='navbar'>
      <h1>Dashboard</h1>

      <div className='navbar__items'>
        <p><IoMdSearch /></p>
        <p style={{color:"gray"}}>|</p>
        <p><AiOutlineBell /></p>
        <p style={{color:"gray"}}>|</p>
        <p onClick={toggleHighlights}><BsThreeDotsVertical /></p>
      </div>
    </div>
  )
}

export default Navbar
