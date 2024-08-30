import React from "react";

import Form from "../../component/recipe/form";
import RecipeList from "../../component/recipe/recipeList.jsx";
import { useNavigate } from "react-router-dom";
function Recipe() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/task")}>task</button>
      <Form />
      <RecipeList />
    </div>
  );
}

export default Recipe;
