import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: JSON.parse(localStorage.getItem("recipes")) || [],

  addRecipe(recipe) {
    const newRecipe = { ...recipe };
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
    localStorage.setItem("recipes", JSON.stringify(get().recipes));
  },
}));

export default useRecipeStore;
