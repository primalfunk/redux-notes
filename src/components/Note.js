import React from 'react'
import { connect } from 'react-redux'

const Note = ({ id, name, complete, dispatch }) => (
  <ul>
  <li
    onClick={ () => dispatch({ type: 'TOGGLE_NOTE', id })}
    style={ complete ? {textDecoration: 'line-through', color: 'green'} : {} }
  >
    {name}
  </li>
  </ul>
)

export default connect()(Note)