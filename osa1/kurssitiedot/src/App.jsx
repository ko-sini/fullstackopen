const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.exerciseCount}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExerciseCount}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header title={course} />
      
      <Content part={parts[0].name} exerciseCount={parts[0].exercises} />
      <Content part={parts[1].name} exerciseCount={parts[1].exercises} />
      <Content part={parts[2].name} exerciseCount={parts[2].exercises} />

      <Total totalExerciseCount={parts[0].exercises + parts[1].exercises + parts[2].exercises}  />
    </div>
  )
}

export default App