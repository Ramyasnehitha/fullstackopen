import './App.css';
import React, { useState} from 'react'

const Header = (props) => {
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
     <Part part={props.name} exercises={props.exercises}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercices {props.exercise}</p>
    </div>
  )
}
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
    const findWinner = () => votes.indexOf(Math.max(...votes));
  return (
    <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={registerVote}>Vote</button>
            <button onClick={selectRandomAnecdote}>Next Anecdote</button>

            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[findWinner()]}</p>
            <p>has {votes[findWinner()]} votes</p>
        </div>
  );
}


export default App;