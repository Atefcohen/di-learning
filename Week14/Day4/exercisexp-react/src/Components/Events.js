import React from 'react'

class Events extends React.Component{

    constructor(){

        super();
        this.state = { isToggleOn : true }
    }


    clickMe = () => {

        alert("I was clicked");
    }


    handleKeyPress = event => {
       
        if (event.key == "Enter") {
            alert(`The Enter key was pressed, your input is : ${event.target.value}`);
        } 
    }


    switchState = event => {

        console.log(this.state.isToggleOn)
       
        if(this.state.isToggleOn){

            this.state.isToggleOn = false;
            event.target.textContent = 'ON';
        }else{

            this.state.isToggleOn = true;
            event.target.textContent = 'OFF';
        }
       
    }


    render(){

        return(

            <>
                <button onClick={this.clickMe}>ClickMe</button><br></br>
                <input onKeyPress={this.handleKeyPress} placeholder="Press the ENTER key!"/><br></br>
                <button onClick={this.switchState}>OFF</button><br></br>
            </>
        )
    }
}

export default Events