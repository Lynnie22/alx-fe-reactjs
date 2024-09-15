////************CODE IF DATA.JSON IS IN PUBLIC FOLDER*********************** */

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const RecipeDetail = () => {
//   const { id } = useParams(); // Get the recipe ID from the route
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     // Fetch the data from the data.json file
//     fetch('/data.json')
//       .then(response => response.json())
//       .then(data => {
//         // Find the recipe that matches the ID from the URL
//         const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
//         setRecipe(selectedRecipe);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, [id]);

//   // If no recipe is found, show a loading or error message
//   if (!recipe) {
//     return <p>Loading recipe details...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
//       <img
//         src={recipe.image}
//         alt={recipe.title}
//         className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
//       />
//       <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
//       <ul className="list-disc pl-6 mb-6">
//         {recipe.ingredients.map((ingredient, index) => (
//           <li key={index} className="text-gray-700">
//             {ingredient}
//           </li>
//         ))}
//       </ul>
//       <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
//       <ol className="list-decimal pl-6 space-y-2">
//         {recipe.instructions.map((instruction, index) => (
//           <li key={index} className="text-gray-700">
//             {instruction}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default RecipeDetail;


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if necessary

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const recipeId = parseInt(id);
    if (isNaN(recipeId)) {
      setError('Invalid recipe ID.');
      return;
    }

    const selectedRecipe = data.find(recipe => recipe.id === recipeId);
    if (!selectedRecipe) {
      setError('Recipe not found.');
    } else {
      setRecipe(selectedRecipe);
    }
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
      <ul className="list-disc pl-6 mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
      <ol className="list-decimal pl-6 space-y-2">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="text-gray-700">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;

