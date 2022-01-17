import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clear } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()

  let notification = useSelector(state =>
    state.notification
  )

  const style = {
    border: 'solid',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1
  }
  if (notification) {
    setTimeout(() => {
      dispatch(clear(notification))
    }, 5000)
    return (
      <div style={style}>
        {notification}
      </div>
    )
  } else {
    return null
  }
}

export default Notification