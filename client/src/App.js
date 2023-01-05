import logo from './logo.svg';
import './App.css';
import Head from './head'
import { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  useEffect(()=>{
    const canvas=canvasRef.current
    const context=canvas.context("2d")
    context.linewidth=5
  contextRef.current=context
  },[])
  const startDrawing =()=>{

  }

  const finishDrawing =()=>{

  }
  const draw=()=>{

  }

  return (
    <div className="App">
      <Head />
      <canvas 
      onMouseMove={draw}
      onMouseUp={finishDrawing}
      onMouseDown={startDrawing}/>
    </div>
  );
}

export default App;
