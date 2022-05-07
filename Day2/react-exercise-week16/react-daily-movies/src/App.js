import React, {Component} from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h3 id='potato'>Rotten Potatoes</h3>
            <div className='main'>
              <MovieList />
              <MovieDetails />
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default App;
