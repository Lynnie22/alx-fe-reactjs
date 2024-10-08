import {useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import recipeData from '../data.json';


const HomePage = () => {
    const [recipes, setRecipes] = useState([]);


    // useEffect(() => {
    //     fetch('/data.json')
    //       .then(response => response.json())
    //       .then(data => setRecipes(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);

    useEffect(() => {
        // Instead of fetching, directly set the imported JSON data
        setRecipes(recipeData);
    }, []);

  return (
<div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:translate-y-2 ">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
