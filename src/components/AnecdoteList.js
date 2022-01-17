import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()

  let anecdotes = useSelector(state => state.anecdotes)
  const filterValue = useSelector(state => state.filter)
  if (filterValue) {
    anecdotes = anecdotes.filter(a => a.content.includes(filterValue))
  }
  const vote = async (id) => {
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(voteFor(anecdote))
    dispatch(setNotification('You voted for \'' + anecdote.content +'\'', 5))
  }

  return (
    <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default AnecdoteList
