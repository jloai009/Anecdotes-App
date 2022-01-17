import React from 'react'

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR':
      return ''
    case 'CREATE_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const createNotification = (content) => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: content
  }
}

export const clear = () => {
  return {
    type: 'CLEAR',
    content: ''
  }
}

export default notificationReducer
