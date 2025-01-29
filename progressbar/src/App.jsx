import { useState } from 'react'
import './App.css'

function App() {
  const [progress,setProgress]=useState(0);
  const [increment, setIncrement]=useState(true);
  
  
  const handleClick=()=>{
    if(progress<100){
      const inc=increment ? 10 :15;
    const newProgress=Math.min(progress+inc,100);
    setProgress(newProgress);
    setIncrement(!increment);
  }
  };
  
  const handleResetClick = () => {
    setProgress(0); 
    setIncrement(true); 
  };
    return (
       <div className="App" style={{textAlign:"center", marginTop:"50px"}}>
       <h1>Progress Bar</h1>
       
       <div style={{ width:"300px",
                      height:"30px",
                      backgroundColor:"blue",
                      borderRadius:"5px",
                      overflow:"hidden",
                      margin: "0 auto",
                      position: "relative"}}
       >
      <div            
                      style={{
                        width:`${progress}%`,
                        height:"100%",
                        backgroundColor:"Yellow",
                        transition:"width 0.5s",
                      }}
        ></div>
           </div>           
        <p>{progress}%</p>
        <div style={{marginTop: "10px"}}>
        <button onClick={handleClick} 
        style={{marginTop: "20px",
          padding:"10px 20px",
          fontSize:"20px",
          cursor:"pointer",}}>
          Increment Progress
        </button>
        <button
            onClick={handleResetClick}
            disabled={progress === 0}
            style={{
              padding: "10px 20px",
              fontSize: "20px",
              cursor: progress === 0 ? "not-allowed" : "pointer", // Change cursor when disabled
              backgroundColor: progress === 0 ? "gray" : "#f00", // Gray out the button when disabled
            }}
          >
            Reset
          </button>
         </div>
         </div>
    );
  }
  
  export default App;
  
