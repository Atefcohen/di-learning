import logo from './logo.svg';
import CarouselType from './Carroussel';
import './App.css';
let images = [
  {
    image:"hong.jpg",
    name:"shangai"
  },
  {
    image:"Macao.png",
    name:"macao"
  },
  {
    image:"japan.png",
    name:"japan"
  },
  {
    image:"assets/las Vegas.png",
    name:"Las Vegas"
  }
]
function App() {
  return (
    <div className="App">
      <CarouselType assets={images}/>
    </div>
  );
}

export default App;