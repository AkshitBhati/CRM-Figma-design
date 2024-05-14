import React from 'react'
import logo from "../../assets/logo.png"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAddToQueue, MdLabelImportantOutline, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgClipboard } from "react-icons/cg";
import { PiTrainSimpleBold, PiSuitcaseSimple } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { FaTruckArrowRight } from "react-icons/fa6";
import { TbBoxMultiple } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <img src={logo} alt="" />
    <LuLayoutDashboard size={"24px"} color='gray'/>
    <MdOutlineAddToQueue size={"24px"} color='gray'/>
    <MdLabelImportantOutline size={"24px"} color='gray'/>
      <CgClipboard size={"24px"} color='gray'/>
      <PiTrainSimpleBold size={"24px"} color='gray'/>
      <BsTruck size={"24px"} color='gray'/>
      <FaTruckArrowRight size={"24px"} color='gray'/>
      <TbBoxMultiple size={"24px"} color='gray'/>
      <MdOutlineAccountBalanceWallet size={"24px"} color='gray'/>
      <PiSuitcaseSimple size={"24px"} color='gray'/>
      <CiSettings size={"24px"} color='gray'/>
    </div>
  )
}

export default Sidebar
