import './App.css';
import React, { useState} from 'react'


function App({anecdotes}) {
    const [selected, setSelected] = useState(0);

    // Store votes in an initially zero-filled array of length equal to the number of anecdotes
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
    
    // Function to store votes
    const registerVote = () => {
        const newVotes = [...votes];
        newVotes[selected]++;
        setVotes(newVotes);
    };

    // Function to select a random anecdote
    const selectRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

    // Function that returns the index of the anecdote with the most number of votes
  
  return (
    <div>
           
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={registerVote}>Vote</button>
            <button onClick={selectRandomAnecdote}>Next Anecdote</button>
        </div>
  );
}


export default App;