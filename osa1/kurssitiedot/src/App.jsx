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
      <Part part={props.parts[0]} exerciseCount={props.exerciseCounts[0]} />
      <Part part={props.parts[1]} exerciseCount={props.exerciseCounts[1]} />
      <Part part={props.parts[2]} exerciseCount={props.exerciseCounts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
      <p>{props.part} {props.exerciseCount}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      
      <Content parts={[part1, part2, part3]} exerciseCounts={[exercises1, exercises2, exercises3]} />

      <Total totalExerciseCount={exercises1 + exercises2 + exercises3}  />
    </div>
  )
}

export default App