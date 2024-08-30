import React from "react";
import useRecipeStore from "../../useRecipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul style={{ listStyleType: "none" }}>
      {recipes.map((recipe) => {
        return (
          <li style={{ display: "flex" }}>
            <p>{recipe.recipeName}</p> <p>{recipe.recipeAmount}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipeList;
