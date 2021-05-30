import './App.css';
import React, { useState} from 'react'


function App({anecdotes}) {
    const [selected, setSelected] = useState(0);

    // Function to select a random anecdote
    const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  
  return (
    <div>
           
            <p>{anecdotes[selected]}</p>
            <button onClick={selectRandomAnecdote}>Next Anecdote</button>
        </div>
  );
}


export default App;