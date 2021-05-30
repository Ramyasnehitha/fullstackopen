import './App.css';
import React from 'react'

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
function App() {
    const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course}/>
      <Content name={part1.name} exercises={part1.exercises}/>
      <Content name={part2.name} exercises={part2.exercises}/>
      <Content name={part3.name} exercises={part3.exercises}/>
      <Total exercise={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  
  );
}


export default App;