import React from 'react'

function TodoItem(task) {
  return (
    <div className='list'>
        <input onChange={() => ontoggle(task.id)} checked={task.completed} type="checkbox"/>
        <div>{task.title}</div>
        <button onClick={() => onDelet(task.id)}>DELETE</button>
    </div>
  )
}

export default TodoItem
