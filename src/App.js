import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import ParticleAnimation from 'react-particle-animation'
import Header from './screens/header/Header'
import Education from './screens/Education/Education';
import Work from './screens/work/Work'


function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <ParticleAnimation 
          background={{ r: 21, g: 22, b: 23, a: 255 }}
          numParticles={100}
          style= {{height: '100vh'}}  
          lineWidth = {0.5}
          particleSpeed= {0.1}
          particleRadius= {1}
          color= {{ r: 255, g: 165, b: 0, a: 255 }}
        />
        <Education />
        <Work />
    </div>
  );
}

export default App;
