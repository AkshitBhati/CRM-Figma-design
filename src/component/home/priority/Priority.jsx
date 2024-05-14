import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import "./Priority.css"

const Priority = () => {
  return (
    <div className='priority__wrapper'>
        <div className="priority__header">
            <h3>High Priority alerts (14)</h3>
            <h4>View All <IoIosArrowForward /></h4>
        </div>

        <div className='priority__content'>
            <div className='driver__concern'>
                <div className='concer__header'>
                    <div className='header__user'>
                        <div className='user__profile'>
                            <FaRegUser />
                        </div>
                        <p style={{fontWeight:"600", fontSize:"18px"}}>Driver Raised Concern <br /><span style={{fontWeight:"400",fontSize:"15px"}}>Load No : 12454, Bill To : RoaDo demo Bangalore</span></p>
                    </div>
                    <p>{new Date().getDate()} {new Date().toLocaleDateString('en-US', { month: 'short' })} {new Date().getFullYear().toString().substring(-2)}</p>
                </div>
                    <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua</p>

                    <div className='priority__buttons'>
                       <p>Ignore</p>
                        <button>Resolve</button>
                    </div>
            </div>

            <div className='driver__concern'>
                <div className='concer__header'>
                    <div className='header__user'>
                        <div className='user__profile'>
                            <FaRegUser />
                        </div>
                        <p style={{fontWeight:"600", fontSize:"18px"}}>Reefer Temp. out of range <br /><span style={{fontWeight:"400",fontSize:"15px"}}>Load No : 12454, Bill To : RoaDo demo Bangalore</span></p>
                    </div>
                    <p>{new Date().getDate()} {new Date().toLocaleDateString('en-US', { month: 'short' })} {new Date().getFullYear().toString().substring(-2)}</p>
                </div>
                    <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua</p>

                    <div className='priority__buttons'>
                    <p>Ignore</p>
                        <button>Resolve</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Priority
