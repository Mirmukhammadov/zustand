import React from "react";
import useTaskStore from "../../useTaskStore";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.filteredTasks());
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.title}
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
