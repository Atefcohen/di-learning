import './App.css';
import React from 'react';
import Counter from './components/Counter';
import {connect} from 'react-redux'


class App extends React.Component{

  render(){

    return (
     <>
      <Counter />
     </>
    )
  }

}

export default App;
