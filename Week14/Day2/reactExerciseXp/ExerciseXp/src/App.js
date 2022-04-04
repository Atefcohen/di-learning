import './App.css';
import Hello from './components/Hello';
import WithoutJSX from './components/WithoutJSX';
import UserFavoriteColors from './components/UserFavoriteColors';
import Exercise4 from './components/Exercise4';

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <WithoutJSX /> */}
      <Hello />
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3> 
      <UserFavoriteColors animals = {user.fav_animals}/>
      <Exercise4 />  

      </header>
    </div>
  );
}

export default App;
