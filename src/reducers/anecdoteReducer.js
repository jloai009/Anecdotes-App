import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      const anecdotes = action.data
      anecdotes.sort((a, b) => (b.votes - a.votes))
      return anecdotes
    case 'VOTE':
      const id = action.data.id
      let newState = state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data
      )
      newState.sort((a, b) => (b.votes - a.votes))
      return newState
    default:
      return state
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const response = await anecdoteService.vote(anecdote)
    if (response.status !== 200) {
      return
    }
    const newAnecdote = response.data
    dispatch({
      type: 'VOTE',
      data: newAnecdote
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer