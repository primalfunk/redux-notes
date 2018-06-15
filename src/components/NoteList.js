import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const filtered = (notes, filter) => {
  switch (filter) {
    case 'All':
      return notes;
    case 'Active':
      return notes.filter(n => !n.complete)
    case 'Completed':
      return notes.filter(n => n.complete)
  }
}

const NoteList = ({ notes, filter }) => (
  <ul>
    {filtered(notes, filter).map((n) => {
      return (<Note key={n.id} {...n} />)
    })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(NoteList)