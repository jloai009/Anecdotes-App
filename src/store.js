import React from 'react'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const combinedReducers = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer
})

const store = createStore(
  combinedReducers,
  composeWithDevTools()
)

export default store
