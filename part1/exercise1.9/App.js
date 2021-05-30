import './App.css';
import React, { useState } from 'react'



const Button = (props) => {
  return (
      <button onClick={props.event}>{props.text}</button>
  )
}
const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral
    const average = (props.good + (props.bad*-1))/all
      const positive = (props.good)/all *100
      if(all===0){
        return (
            <p>No feedbacks given</p>
        )
    }
      return(
          <div>
              <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>

          </div>

      )
}

function App() {
  const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1> give feedback </h1>
            <div>
                <Button event={()=> setGood(good+1)} text="good" />
                <Button event={()=> setNeutral(neutral+1)} text="neutral" />
                <Button event={()=> setBad(bad+1)} text="bad" />
                                
            </div>
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
           
        </div>
    )
}


export default App;