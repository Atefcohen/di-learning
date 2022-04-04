import React from 'react';
import './Exercise4.css';
import logo from './logo100.png';



const Exercise4 = () =>{
const style_header = {
    color: "white",
    backgroundColor: "dodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};
    return(
        <div id='main'>
            <h1 style= {style_header}>This is a header</h1>
            <p class='para'>This is a Paragraph</p>
                <a href='#'>This is a Link</a>
            <div id='form'>
                <form>
                    <h2>This is a Form:</h2>
                    <label>Enter your name</label>
                    <div id='inputs'>
                        <input></input>
                        <button>Submit</button> 
                    </div>
                    
                </form>
            </div>
            
            <div id='img'>
                <h3>Here is an Image</h3>
                <img src={logo} alt=''></img>
            </div>
        
            <div id='list'>
                <h4>This is a List</h4>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        </div>
    )    
}

export default Exercise4
        
