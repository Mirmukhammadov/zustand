import React from "react";

import TaskList from "../../component/task/taskList.jsx";
import AddTask from "../../component/task/addTask.jsx";
import FilterTasks from "../../component/task/filterTask.jsx";
import TaskStats from "../../component/task/taskStats.jsx";
import { useNavigate } from "react-router-dom";

function Task() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/recipe")}>recipe</button>
      <h1>Task Management</h1>
      <AddTask />
      <FilterTasks />
      <TaskList />
      <TaskStats />
    </div>
  );
}

export default Task;
