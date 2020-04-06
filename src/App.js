import React, {useState} from 'react';
import Profiles from './Profiles.js';
import Location from './Location.js';
import {useSpring, animated} from 'react-spring';
import './App.css';

const App = () => {
  const [nameToggle, toggleNameColor] = useState(false);
  // const fade = useSpring({ from: { opacity: 0.5 }, opacity: 1 });
  const animateColor = useSpring({ 
    color: nameToggle ? '#5d8f8b' : 'white',
    transform: nameToggle ? 'translate3d(0,-9px,0)' : 'translate3d(0,1px,0)',
  });

  return (
    <div className="App">
      <Location />
      <header className="Name">
        <animated.div
          style={animateColor}
          onMouseEnter={() => toggleNameColor(!nameToggle)}
          onMouseLeave={() => toggleNameColor(!nameToggle)}
        >
          <p className="Name-text"> Suvajit Chakrabarty</p>
        </animated.div>
      </header>
      <Profiles />
    </div>
  );
}

export default App;
