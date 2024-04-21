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
      <Header title={course} />
      
      <Content parts={[part1.name, part2.name, part3.name]} exerciseCounts={[part1.exercises, part2.exercises, part3.exercises]} />

      <Total totalExerciseCount={part1.exercises + part2.exercises + part3.exercises}  />
    </div>
  )
}

export default App