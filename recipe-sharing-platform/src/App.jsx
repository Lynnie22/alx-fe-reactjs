import HomePage from "./components/HomePage"
import RecipeDetail from "./components/RecipeDetail"
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/form" element={<AddRecipeForm />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
