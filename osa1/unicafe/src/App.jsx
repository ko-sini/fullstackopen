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

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1) 
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleClickGood} buttonText='good' />
        <Button handleClick={handleClickNeutral}  buttonText='neutral' />
        <Button handleClick={handleClickBad} buttonText='bad' />
      </div>
      
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App