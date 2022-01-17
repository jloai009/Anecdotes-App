import React from 'react'
import { filter } from '../reducers/filterReducer'
import { useSelector, useDispatch } from 'react-redux'

const Filter = (props) => {

  const dispatch = useDispatch()

  const filterValue = useSelector(state => state.filter)

  const handleFilter = (event) => {
    dispatch(filter(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter: <input type="text" value={filterValue} onChange={handleFilter}/>
    </div>
  )
}

export default Filter
