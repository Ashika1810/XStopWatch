import { useState, useEffect } from 'react';
import './App.css';
import styles from './App.module.css';


function App() {

  const [timer, setTimer]= useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(()=>{
    let timerID;
    if(isRunning){
    timerID =   setInterval(()=>{
        setTimer((prevValue)=> prevValue+1);
      }, 1000)
    }
      return(()=>{
        clearInterval(timerID);
      });
  }, [isRunning])

  const handleStartStop= ()=>{
    setIsRunning(!isRunning);
  }

  const handleReset = ()=>{
    setTimer(0);
    setIsRunning(false);
  }

  const formatTime = (secs)=>{
      const mins = Math.floor(secs/60);
      const remainingsecs = secs%60;
      return `${mins}:${remainingsecs<10 ? "0" : ""}${remainingsecs}`
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={handleStartStop}>{isRunning? "Stop": "Start" }</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
