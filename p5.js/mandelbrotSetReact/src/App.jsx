import React from 'react';
import Sketch from 'react-p5';
import { setup, draw } from './mandelbrot';
import './App.css';

function App() {
  return (

    <div className="canvas_container">

      <Sketch setup={setup} draw={draw} className="canvas" />

    </div>
  );
}

export default App;
