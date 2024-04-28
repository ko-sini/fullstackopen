import { useState } from 'react'
import {random} from 'mathjs'

const Button = ({ handleClick, buttonText }) => {
  return (
    <button onClick={handleClick}>
      {buttonText}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const maxIndex = anecdotes.length - 1

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [displayVotes, setDisplayVotes] = useState(votes[selected])
  console.log(votes)

  const randomAnecdote = () => {
    const randomIndex = Math.round(Math.random() * maxIndex, 0)
    setSelected(randomIndex)
    setDisplayVotes(votes[randomIndex])
  }

  const voteAnecdote = () => {
    const arr = votes
    arr[selected] += 1
    setVotes(arr)
    setDisplayVotes(arr[selected])
  }

  return (
    <div>
      {anecdotes[selected]}<br />
      has {displayVotes} votes

      <p>
        <Button handleClick={voteAnecdote} buttonText='vote' />
        <Button handleClick={randomAnecdote} buttonText='next anecdote' />
      </p>
    </div>
  )
}

export default App