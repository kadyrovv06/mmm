import React from 'react'
import TodoItem from './todoitem'

function TodoList({data, taggle, delet}) {
  return (
    <div>
        {
            data.map((item) => (
                <TodoItem key={item.id} task={item} onToggle={taggle} onDelet={delet}/>
            ))
        }
    </div>
  )
}

export default TodoList