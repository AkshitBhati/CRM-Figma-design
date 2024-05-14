import React, { useState } from 'react';
import Sidebar from './page/Sidebar/Sidebar';
import Homepage from './page/homePage/Homepage';
import HighlightPage from './page/HighlightPage/HighlightPage';
import Navbar from './component/home/navbar/Navbar'; 
import "./App.css";

const App = () => {
  const [responsiveHighlights, setResponsiveHighlights] = useState(false); //used for responsiveness of highlights

  const toggleHighlights = () => {
    setResponsiveHighlights(prevState => !prevState);
  };

  return (
    <div className='app'>
      <div className="sidebar">
        {/* sidebar component  */}
        <Sidebar /> 
      </div>
      <div className="home">
        {/* main home component  */}
        <Navbar toggleHighlights={toggleHighlights} /> {/* Pass the toggle function as a prop */}
        <Homepage />
      </div>
      <div className={`highlight ${responsiveHighlights ? 'show' : ''}`}>
        {/* highlight component  */}
        <HighlightPage />
      </div>
    </div>
  );
};

export default App;
