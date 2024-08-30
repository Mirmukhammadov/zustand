import React from "react";
import useTaskStore from "../../useTaskStore";

const FilterTasks = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        disabled={filter === "incomplete"}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterTasks;
