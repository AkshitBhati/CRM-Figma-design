import React, { useState } from 'react';
import Sidebar from './page/Sidebar/Sidebar';
import Homepage from './page/homePage/Homepage';
import HighlightPage from './page/HighlightPage/HighlightPage';
import Navbar from './component/home/navbar/Navbar'; // Assuming Navbar is a separate component
import "./App.css";

const App = () => {
  const [responsiveHighlights, setResponsiveHighlights] = useState(false);

  const toggleHighlights = () => {
    setResponsiveHighlights(prevState => !prevState);
  };

  return (
    <div className='app'>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home">
        <Navbar toggleHighlights={toggleHighlights} /> {/* Pass the toggle function as a prop */}
        <Homepage />
      </div>
      <div className={`highlight ${responsiveHighlights ? 'show' : ''}`}>
        <HighlightPage />
      </div>
    </div>
  );
};

export default App;
