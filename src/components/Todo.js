import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, deleted, text, deleteTodo }) => (

  <li
    style={{
      // textDecoration: completed ? 'line-through' : 'none',
      listStyle: "none"
    }}
    hidden={deleted}
  >
    <span hidden={!completed}>✓</span>
    
    {text}
    <button hidden={completed} type="submit" onClick={onClick} style={{ marginLeft: '10px',  fontSize: '1rem'}}>
         Done
        </button>
        <button hidden={completed} type="submit" onClick={() => deleteTodo(1)} style={{ marginLeft: '10px',  fontSize: '1rem'}}>
         Delete
        </button>
    {/* <button type="submit" onClick={onClick} style={{ marginLeft: '10px',  fontSize: '1rem'}}>
         Edit
        </button>
        <button type="submit" onClick={onClick} style={{ marginLeft: '10px',  fontSize: '1rem'}}>
         Delete
        </button> */}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted:  PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo
