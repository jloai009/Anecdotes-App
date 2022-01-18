import React from 'react'
import { filter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const filterValue = props.filterValue

  const handleFilter = (event) => {
    props.filter(event.target.value)
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
    filterValue: state.filter
  }
}

const mapDispatchToProps = {
  filter,
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter
