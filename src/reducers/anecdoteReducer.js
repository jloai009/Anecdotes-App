const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
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
  return {
    type: 'VOTE',
    data: anecdote
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: content
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default reducer