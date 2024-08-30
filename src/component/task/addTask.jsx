import React, { useState } from "react";
import useTaskStore from "../../useTaskStore";

function AddTask() {
  const [taskTitle, setTaskTitle] = React.useState("");

  const addTask = useTaskStore((state) => state.addTask);

  function handleAddTask() {
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
