import React from "react";
import useTaskStore from "../../useTaskStore";

const FilterTasks = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);

  return (
    <div>
      <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="incomplete">incomplete</option>
      </select>
    </div>
  );
};

export default FilterTasks;
