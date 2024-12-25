import React, { useState } from 'react'
import './Todo.css'

function Form({clicked}) {
  const [title, setTitle] = useState("")

  function handleTask() {
    if(title.trim() != "") {
      clicked(title)
      setTitle("")
    }

  }
  return (
    <div className='tasks' style={{ fontFamily:"Arial, sans-serif",  margin:"30px 0 auto", padding:"20px", border:'1px solid #ddd', borderRadius:"10px", boxShadow:"0 4px 6px rgba(0, 0, 0, 0, 1)", backgroundColor:"#f9f9f9"}}>

      <input value={title} onChange={(e) => setTitle(e.target.value )} style={{border:"1px solid #ddd", borderRadius:"5px", padding:"10px", marginBottom:"10px", fontSize:"16px", marginTop:"10px"}} type="text" placeholder='Add a new task'  />

      <button onClick={() => handleTask()} style={{backgroundColor:"#4CAF50", color:"white",border:"none", borderRadius:"5px", padding:"10px", cursor:"pointer",width:"80px", fontSize:"16px",  }}>Add</button>
    </div>
  )
}

export default Form
