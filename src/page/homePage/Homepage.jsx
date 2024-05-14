import React from 'react'
import Navbar from '../../component/home/navbar/Navbar'
import Chart from '../../component/home/chart/Chart'
import "./Homepage.css"
import QuickActions from '../../component/home/quickActions/QuickActions'
import Priority from '../../component/home/priority/Priority'

const Homepage = () => {
  return (
    <div className='home__wrapper'>
      
      <div>
        <Chart />
      </div>

      <div>
        <QuickActions />
      </div>

      <div>
        <Priority />
      </div>
    </div>
  )
}

export default Homepage
