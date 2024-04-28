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

  if (all == 0) {
    return (
      <div>
        No feedback given
      </div>
    ) 
  } else {
    return (
      <div>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={avg} />
        <StatisticLine text='positive' value={pctPositive + ' %'} />
      </div>
    )
  }
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
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

      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App