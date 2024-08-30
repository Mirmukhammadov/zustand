import { create } from "zustand";

const useTaskStore = create((set, get) => ({
  tasks: JSON.parse(localStorage.getItem("task")) || [],
  filter: "all",

  addTask(title) {
    const newTask = {
      id: get().tasks.length ? get().tasks.length : 0,
      title,
      completed: false,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
    localStorage.setItem("task", JSON.stringify(get().tasks));
  },

  toggleTask(id) {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    }));

    localStorage.setItem("task", JSON.stringify(get().tasks));
  },

  deleteTask(id) {
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        return task.id !== id;
      }),
    }));
    localStorage.setItem("task", JSON.stringify(get().tasks));
  },

  setFilter: (filter) => set({ filter }),

  filteredTasks: () => {
    const { tasks, filter } = get();

    if (filter === "completed") {
      return tasks.filter((task) => task.completed === true);
    } else if (filter === "incomplete") {
      return tasks.filter((task) => task.completed !== true);
    } else {
      return tasks;
    }
  },

  completedCount: () => {
    return get().tasks.filter((task) => task.completed === true).length;
  },
}));

export default useTaskStore;
