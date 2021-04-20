import React from 'react';
import Sketch from 'react-p5';
import { setup, draw, preload } from './gol';
import './App.css';

function App() {
  return (

    <div className="canvas_container">

      <Sketch preload={preload} setup={setup} draw={draw} />

    </div>
  );
}

export default App;
