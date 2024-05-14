import React from 'react'
import "./Today.css"

const Today = () => {
  return (
    <div className='today__wrapper'>
      <h2>Today Highlights (14)</h2>
      <p>{new Date().getDate()} {new Date().toLocaleDateString('en-US', { month: 'short' })} {new Date().getFullYear().toString().substring(-2)}</p>

      <div className='today__expenses'>
        <div className='exprense__wrapper'>
            <p style={{fontWeight:"600"}}>Income</p>
            <h3 style={{color:"#148714"}}>100000 CAD</h3>
            <p style={{fontSize:"15px"}}>2 payments recived</p>
        </div>

        <div className='exprense__wrapper'>
            <p style={{fontWeight:"600"}}>Exprenses</p>
            <h3 style={{color:"#D04141"}}>50000 CAD</h3>
            <p style={{fontSize:"15px"}}>5 payments paid</p>
        </div>
      </div>
    </div>
  )
}

export default Today
