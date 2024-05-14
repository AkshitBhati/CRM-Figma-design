import React from 'react';
import "./Completed.css";

const Completed = () => {
  return (
    <div className='completed__wrapper'>
      <div className='completed__header'>
        <h3>Completed Activities (14)</h3>
        <p>View All</p>
      </div>

      <table className='completed__table'>
        <tbody>
          <tr>
            <td><span style={{color:"#1A3875"}}>Gurpreet Singh</span> <span style={{color:"#676666"}}>(Dispatch team) has created</span> Load No. I-I-AAA-1325</td>
          </tr>
          <tr>
            <td><span style={{color:"#1A3875"}}>Gurpreet Singh</span>  <span style={{color:"#676666"}}>(Driver)</span> Picked Up <span style={{color:"#676666"}}>goods at</span> Location_Name <span style={{color:"#676666"}}>for</span> Load No. I-I-AAA-1325</td>
          </tr>
          <tr>
            <td><span style={{color:"#1A3875"}}>Gurpreet Singh</span> <span style={{color:"#676666"}}>(Dispatch team) has created</span> Load No. I-I-AAA-1325</td>
          </tr>
          <tr>
            <td>Load No. I-I-AAA-1325 <span>will start added by</span> <span style={{color:"#1A3875"}}>Gurpreet Singh</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Completed;
