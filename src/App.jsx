import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

import Task from "./pages/tasks/tasks.jsx";
import Recipe from "./pages/recipe/recipe.jsx";

import Nav from "./component/nav/nav.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/" element={<Nav />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
