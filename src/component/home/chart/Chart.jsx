import React from 'react'
import Card from './Card/CardComp'
import "./Chart.css"

const Chart = () => {
  return (
    <div className='chart'>
      <Card name={"Orders"}/>
      <Card name={"Trips"}/>
      <Card name={"Revenue"}/>
      <Card name={"Expenses"}/>
    </div>
  )
}

export default Chart
