import './App.css';
import React, { useState } from 'react'



const Button = (props) => {
  return (
      <button onClick={props.event}>{props.text}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const all = good + bad + neutral
    const average = (good + (bad*-1))/all
      const positive = (good)/all *100
    
    return (
        <div>
            <h1> give feedback </h1>
            <div>
                <Button event={()=> setGood(good+1)} text="good" />
                <Button event={()=> setNeutral(neutral+1)} text="neutral" />
                <Button event={()=> setBad(bad+1)} text="bad" />
                                
            </div>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>
           
        </div>
    )
}


export default App;