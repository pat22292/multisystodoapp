import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} style={{height: 'auto', marginRight: '20px',  fontSize: '2rem'}}/>
        <button type="submit" style={{height: 'auto', marginRight: '20px',  fontSize: '2rem'}}>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
