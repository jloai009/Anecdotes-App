import React from 'react'
import { useSelector } from 'react-redux'

const initialState = {
  notification: '',
  timeout: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initialState
    case 'CREATE_NOTIFICATION':
      if (state.timeout) {
        clearTimeout(state.timeout)
      }
      return {
        notification: action.data.content,
        timeout: action.data.timeout
      }
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
  return async dispatch => {
    dispatch({
      type: 'CLEAR'
    })
  }
}

export const setNotification = (content, duration) => {
  return async dispatch => {
    dispatch({
      type: 'CREATE_NOTIFICATION',
      data: {
        content,
        timeout:
          setTimeout(() => {
            dispatch(clear())
          }, duration * 1000)
      }
    })
  }
}

export default notificationReducer
