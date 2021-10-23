import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import ParticleAnimation from 'react-particle-animation'



function App() {
  return (
    <div className="App">
        <Navigation />
        <ParticleAnimation 
          background={{ r: 21, g: 22, b: 23, a: 1 }}
          style= {{height: '96vh'}}  
          particleSpeed= {0.1}
          particleRadius= {2}
          color= {{ r: 255, g: 165, b: 0, a: 255 }}
        />
    </div>
  );
}

export default App;
