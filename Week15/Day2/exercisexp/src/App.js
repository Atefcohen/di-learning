import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color';
import Child from './components/Child';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <ErrorBoundary> 
              <BuggyCounter />  
              <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
              <BuggyCounter />                
      </ErrorBoundary>
      <ErrorBoundary>
              <BuggyCounter />
      </ErrorBoundary>
      <BuggyCounter /> */}        
      <Child />
      <Color />
      </header>
    </div>
  );
}

export default App;
