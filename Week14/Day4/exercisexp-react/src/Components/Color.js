import React from "react";

class Color extends React.Component{

    constructor(){

        super();
        this.state = {favoriteColor : "red"}
    }

    componentDidMount(){  

        setTimeout(this.changeColor, 5000);  
    }


    changeColor = () => {
        
        this.setState({favoriteColor : "yellow"});
    }


    changeToBlue = () => {

        this.setState({favoriteColor : "blue"});

    }


    render(){

        return(

            <>
                <h1>{`My Favorite color is ${this.state.favoriteColor}`}</h1>
                <button onClick={this.changeToBlue}>CHANGE COLOR TO BLUE</button>
            
            
            </>
        )
    }
}

export default Color;