import React from 'react'
import { filter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'

const Filter = (props) => {

  const dispatch = useDispatch()

  const filterValue = props.filter

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

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const ConnectedFilter = connect(
  mapStateToProps
)(Filter)

export default ConnectedFilter
