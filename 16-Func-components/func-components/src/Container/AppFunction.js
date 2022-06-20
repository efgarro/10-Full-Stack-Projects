import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";
import { v4 as uuidv4 } from "uuid";

export default function AppFunction() {
  // hook your code up here ;)
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    console.log(target);
    console.log(newTask);
    const { name, value } = target;
    setNewTask((prevNewTask) => {
      return { ...prevNewTask, [name]: value, id: uuidv4() };
    });

    // this.setState((prevState) => ({
    //   ...prevState,
    //   newTask: {
    //     ...prevState.newTask,
    //     [name]: value,
    //     id: Date.now()
    //   }
    // }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prevState) => [newTask, ...prevState]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prevState) =>
      prevState.filter((task) => task.id !== taskIdToRemove)
    );

    // setAllTasks((prevState) => ({
    //   ...prevState,
    //   allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove),
    // }));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
