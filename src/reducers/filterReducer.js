import React from 'react'

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data
    default:
      return state
  }
}

export const filter = (content) => {
  return {
    type: 'FILTER',
    data: content
  }
}


export default filterReducer
