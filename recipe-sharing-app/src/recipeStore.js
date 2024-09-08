import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

  // Action to add a recipe by its id
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

    setRecipes: (recipes) => set({ recipes })

  // Action to delete a recipe by its id
    deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  // Action to update an existing recipe by its id
    updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
    recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
    )
  }))
}));

export {useRecipeStore}