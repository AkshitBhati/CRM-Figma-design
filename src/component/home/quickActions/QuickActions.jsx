import React from 'react'
import { MdLabelImportantOutline } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { FaTrailer } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import "./QuickActions.css"

const QuickActions = () => {
  return (
    <div className='actions__wrapper'>
      <h3>Quick Actions</h3>

      <div className='actions'>
        <div className='actions-function'>
            <p><MdLabelImportantOutline size={"22px"}/></p>
            <p>Create Indents</p>
        </div>
        <p style={{fontSize:"35px", color:"#CBCBCB", fontWeight:"300"}}>|</p>
        <div className='actions-function'>
            <p><FiTruck size={"22px"}/></p>
            <p>Add Vehicle</p>
        </div>
        <p style={{fontSize:"35px", color:"#CBCBCB", fontWeight:"300"}}>|</p>
        <div className='actions-function'>
            <p><FaTrailer size={"22px"}/></p>
            <p>Add Trailer</p>
        </div>
        <p style={{fontSize:"35px", color:"#CBCBCB", fontWeight:"300"}}>|</p>
        <div className='actions-function'>
            <p ><FaRegUser size={"22px"}/></p>
            <p>Add Driver</p>
        </div>
        <p style={{fontSize:"35px", color:"#CBCBCB", fontWeight:"300"}}>|</p>
        <div className='actions-function'>
            <p><FiTruck size={"22px"}/></p>
            <p>Create Indents</p>
        </div>

        
      </div>
    </div>
  )
}

export default QuickActions
