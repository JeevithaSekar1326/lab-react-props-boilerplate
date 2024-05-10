import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";


function App() {
  // code here
  return(
    <div className="image-container">
      {imageData().map(item=>(
        <img key={item.id} 
        src={item.images} 
        alt={`Image ${item.id}`} />
      ))}
    </div>
  );
}

export default App;
