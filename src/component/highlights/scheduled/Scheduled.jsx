import React from 'react';
import "../completed/Completed.css";

const Scheduled = () => {
  return (
    <div className='completed__wrapper'>
      <div className='completed__header'>
        <h3>Scheduled Activities (14)</h3>
        <p>View All</p>
      </div>

      <table className='completed__table'>
        <tbody>
          <tr>
            <td>Load No. I-I-AAA-1325 <span style={{color:"#676666"}}>will be</span> delivered <span style={{color:"#1A3875"}}>by Aman (Driver)</span></td>
          </tr>
          <tr>
            <td><span style={{color:"#1A3875"}}>Aman</span> <span style={{color:"#676666"}}>(Driver) will</span> Picked Up <span style={{color:"#676666"}}>goods at </span> Location_Name <span style={{color:"#676666"}}>for</span> Load No. I-I-AAA-1325</td>
          </tr>
          <tr>
            <td>Load No. I-I-AAA-1325 <span style={{color:"#676666"}}>will start added by</span> <span style={{color:"#1A3875"}}>Gurpreet Singh</span></td>
          </tr>
          <tr>
          <td>Load No. I-I-AAA-1325 <span style={{color:"#676666"}}>will start added by</span> <span style={{color:"#1A3875"}}>Gurpreet Singh</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scheduled;
