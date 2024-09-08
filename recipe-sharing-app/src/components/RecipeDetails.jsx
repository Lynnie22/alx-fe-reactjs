import React from 'react'

const RecipeDetails = ({ recipeId }) => {
    import { useRecipeStore } from './recipeStore';
    const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
      );
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  )
}

export default RecipeDetails
