import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {

  // In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};
  const carInfo = {name: "Ford", model: "Mustang"};

  return (
   <>
    {/* <Car carInfo={carInfo} />
    <Events /> */}
    <Phone />
    <Color />
   </>
  );
}

export default App;