import React, { useState } from "react"


function  App () {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask (event.target.value);
  };

const handleAddTask = () => {
  if (newTask.trim() !== '') {
    setTasks([...tasks, newTask]);
    setNewTask('');
  }
};

  const handleDeleteTask =(index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice (index, 1);
    setTasks(updatedTasks);
  };
  return(
 <div class=" p-3 m-5 text-primary-emphasis bg-light border border-primary-subtle rounded-3" >
  <h1 class="text-dark bs-dark-border-subtle m-25 position-absolute start-50 translate-middle fw-bold fs-1 fst-italic" >Lista de tareas</h1>
  <input class=" m-5 from-control me-2 bg-light" aria-label="Search"
  type="text" 
  placeholder='Tarea'
  value={newTask}
  onChange={handleInputChange}
  />
  <button class="m-5 rounded-pill btn btn-danger   " onClick={handleAddTask } > Agregar Tarea</button>
<ul class="list-group m-5" >
{tasks.map((task, index) => (
  <li class="fw-bold fs-4 fst-italic text-dark" key={index}>
  
    {task}
    <button class="m-5 btn btn-dark btn-sm rounded-pill" onClick = {() => handleDeleteTask(index)}>Eliminar</button>
  </li>
)

)
}

</ul>

 </div>
  );
}

export default App

