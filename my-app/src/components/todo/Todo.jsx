import React, {useState} from "react"
import Form from './form'
import TodoList from './TodoList'
import "./Todo.css"

function Todo() {
    const [tasks, setTasks] = useState([{title: "Azim", completed: true, id: 1}, {title: "Saltanat", completed: false, id: 2} ])

    function addTask(text) {
      setTasks([...tasks, {title:text, id:tasks.length + 1, completed:false}])
    }

    function handleToggle(id) {
        setTasks(
          tasks.map((item) => item.id == id ? {...item, completed:!item.completed} : item)
        )
    }
    function handleDelete(id) {
      setTasks(tasks.filter((x) => x.id != id))
    }

  return (
    <div>
        <Form clicked={addTask} />
        <TodoList  data={tasks} toggle={handleToggle} delet={handleDelete}/>
    </div>
  )
}

export default Todo



