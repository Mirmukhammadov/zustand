import React from "react";
import { useForm } from "react-hook-form";
// import {FormValue} from '../../formContext'
import useRecipeStore from "../../useRecipeStore";

function Form() {
  const { register, handleSubmit, reset } = useForm();
  //   const { formData, setFormData } = React.useContext(FormValue);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const onSubmit = (data) => {
    console.log(data);
    addRecipe(data);
    reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="recipe name"
          {...register("recipeName", { required: true })}
        />
        <input
          type="text"
          placeholder="recipe amount"
          {...register("recipeAmount", { required: true })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
