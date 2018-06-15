import React from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {
  state = { name: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name } = this.state
    const note = { name, id, complete:false }
    dispatch({ type: 'ADD_NOTE', note })
    dispatch({ type: 'INC_ID'})
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render () {
    const { name } = this.state
    return (
      <div>
        <h3>Add a Note</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={ name } onChange={ this.handleChange } />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm)