import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{

  constructor(){

    super();

    this.state = {

      messageFromServerAfterGet : '',
      messageFromServerAfterPost : '',
      textFromInput : ''
    }
  }


  // Once at class component creating after render
  async componentDidMount(){

    try{

      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.json();
      this.setState({messageFromServerAfterGet : data});
    }
    catch(e){

      console.log(e);
    }
  }

  handleChange = (e) => {

    this.setState({textFromInput : e.target.value});
  }


  sendPostReqToServer = async (e) => {

    e.preventDefault();

    const {textFromInput} = this.state;
    const post = textFromInput;

    try{
        const response = await axios.post('http://localhost:5000/api/world', 
          {
            post
          });
        
        console.log(response.data); // In axios we have the response in : res.data
        this.setState({messageFromServerAfterPost : response.data});
      }
      catch(e){
  
        console.log(e);
      }
  }
  


  render() {
    return (
      <div className="App">

        <h1>{this.state.messageFromServerAfterGet}</h1>

        <h2>POST to server:</h2>
        <form onSubmit={this.sendPostReqToServer}>
          <input onChange={this.handleChange} type={"text"} placeholder={"type message to server..."}/>
          <input type={"submit"} value={"Submit"}/>
          <h3>{this.state.messageFromServerAfterPost}</h3>
        </form>

      </div>
    );
  }
}
export default App;