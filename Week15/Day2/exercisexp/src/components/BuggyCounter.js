import React from 'react';

class BuggyCounter extends React.Component {
  constructor(){
    super();
    this.state = {
      counter : 0
    }
  }
  addOne =()=>{
    this.setState({counter : this.state.counter +1})
  }
  render(){
    if(this.state.counter >= 5){
      throw Error ('There was A problem')
    }
    return(
        <div id='counter'>
          <button id='btn' onClick={this.addOne}>Add</button>
          <>{this.state.counter}</> 
        </div>    
    )
  }
}

export default BuggyCounter;