import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

const Notification = () => {

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
    return (
      <div style={style}>
        {notification}
      </div>
    )
  } else {
    return null
  }
}

const ConnectedNotification = connect(

)(Notification)

export default ConnectedNotification