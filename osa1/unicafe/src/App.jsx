import { useState } from 'react'

const Button = ({ handleClick, buttonText }) => {
  return (
    <button onClick={handleClick}>
      {buttonText}
    </button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const avg = (good - bad) / all
  const pctPositive = good / all * 100

  return (
    <div>
      <h1>Statistics</h1>
      good {good}<br />
      neutral {neutral}<br/>
      bad {bad}<br />
      all {all}

      <p>
        average {avg}<br />
        positive {pctPositive} %
      </p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (value, setValue) => setValue(value + 1)

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => handleClick(good, setGood)} buttonText='good' />
        <Button handleClick={() => handleClick(neutral, setNeutral)}  buttonText='neutral' />
        <Button handleClick={() => handleClick(bad, setBad)} buttonText='bad' />
      </div>
      
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App