import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  

  // code here
  render() {
    return (
      <div className="image-container">
        {this.imageData().map(item => (
          <img key={item.id}
           src={item.images} 
           alt={`Image ${item.id}`} />
        ))}
      </div>
    );
  }
  
}
