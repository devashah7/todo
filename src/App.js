import React, {useState} from 'react';
import './App.css';
import Task from './components/Task';

function App() {

  const [taskname, setTaskname] = useState("");
  const [time, setTime] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const addTask = () =>{
setTasklist([...tasklist, {task: taskname, time: time}]);
setTaskname('');
setTime('');


  };

  return (
    <div className="App">
      <h1>todo list</h1>
      <label>Task Name: </label>

      <input type='text' id='task' onChange={(e)=>{setTaskname(e.target.value)}}></input>
      <label>Time: </label>
      <input type='text' id='task' onChange={(e)=>{setTime(e.target.value)}}></input>
      <button onClick={addTask}>Add</button>

      {tasklist.map((task)=>{

          return <Task taskName={task.task} time={task.time}></Task>

      })}



    </div>
  );
}

export default App;
