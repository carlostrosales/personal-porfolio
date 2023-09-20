import './App.css';

import Home from './components/Home';
import About from './components/About';


const appStyle = {
  display: 'flex',
  flexDirection: 'column',
} as React.CSSProperties;

function App() {
  return (
    <div className="App" style={appStyle}>
    <Home/>
    <About />
      
    </div>
  );
}

export default App;
