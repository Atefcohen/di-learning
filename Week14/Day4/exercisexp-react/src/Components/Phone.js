import React from "react";

class Phone extends React.Component{
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    componentDidMount(){
     
    }
    render(){
        const changeColor = ()=>{
            if(this.state.color === 'black'){
                this.setState({color: "blue"});
            } else {
                this.setState({color: "black"});
            }   
        }
        
        return(
            <> 
              <h1>My phone is A {this.state.brand}</h1> 
              <br/> 
              <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p> 
              <button id="btn" onClick={changeColor}>Change color</button>
            </>
        )
    }
}

export default Phone;