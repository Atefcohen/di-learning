import React from "react"; // only for class components

class Color extends React.Component{
    constructor(){
        super();
        this.state = {
            favoriteColor : 'Red',
            show : true 
        };
    }
    componentDidMount(){
        setTimeout(() => {
            changeColor();
            }, 2000);
        const changeColor = ()=>{
            if(this.state.favoriteColor === 'Red'){
                this.setState({favoriteColor: "Yellow"});
            }   
        }
        
    }
    shouldComponentUpdate(nextProps, nextState) {
       return true;
    }
    
    
    componentDidUpdate(prevState) {
        if (prevState.favoriteColor !== this.state.favoriteColor) {
          console.log(prevState.favoriteColor, this.state.favoriteColor)
          return (<h4>`My Favorite color is {this.state.favoriteColor}`</h4>)
        } 
    }

    render() {
        const changeColorClick = ()=>{
            if(this.state.favoriteColor){
                this.setState({favoriteColor: "Pink"});
            }
        }
        return(
            <>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <button onClick={changeColorClick}>click</button>
            </>
        )
    }
}


export default Color;