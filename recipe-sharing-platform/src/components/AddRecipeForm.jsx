
import { useState } from 'react';

const AddRecipeForm = () => {

    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [error, setErrors] = useState("")

    const handleChange = (e)=> {
        const {name, value} = e.target;

        if (name === "title"){
            setTitle(value.trim());
        }else if (name === "ingredients") {
            setIngredients(value.trim());
        }else if (name === "steps" ) {
            setSteps(value.trim());
        }

    }

    const validateForm = () => {
       let formErrors = {};
       let isValid = true;

       if (!title) {
        formErrors.title = "title is required";
        isValid = false;
    }

    if (!ingredients) {
        formErrors.ingredients = "Ingredients is required";
        isValid = false;
    } 

    if (!steps) {
        formErrors.steps = "Preparation steps is required";
        isValid = false;
    } 
    setErrors(formErrors);
    return isValid;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted", { title, ingredients, steps });
            setErrors({});  // Clear errors after successful form submission
        }
    };


  return (
    <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-md'>
      <h1 className='text-4xl text-center mb-4 font-bold'>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Recipe Title</label>
            <input type="text" id='title' name="title" value={title} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md'/>
            {error.title && <div style={{ color: "red" }}>{error.title}</div>}
        </div>
        
        <div>
            <label htmlFor="ingedients">Ingredients</label>
            <textarea type="text" id='ingredients' name="ingredients" value={ingredients} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' />
            {error.ingredients && <div style={{ color: "red" }}>{error.ingredients}</div>}
        </div>
        
        <div>
            <label htmlFor="steps">Preparation Steps</label>
            <textarea type="text" id='steps' name="steps" value={steps} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md'/>
            {error.steps && <div style={{ color: "red" }}>{error.steps}</div>}
        </div>

        <button type='submit' onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Recipe</button>
        
      </form>
    </div>
  )
}

export default AddRecipeForm











// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const AddRecipeForm = () => {
//   // Form validation schema using Yup
//   const validationSchema = Yup.object({
//     title: Yup.string()
//       .required('Recipe title is required'),
//     ingredients: Yup.string()
//       .required('Ingredients are required'),
//     steps: Yup.string()
//       .required('Preparation steps are required'),
//   });

//   // Using useFormik hook for form handling
//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       ingredients: '',
//       steps: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       // You can handle form submission here
//       console.log('Form data:', values);
//       // Post the data to your server or add it to your state
//     },
//   });

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-semibold mb-4">Add a New Recipe</h2>
//       <form onSubmit={formik.handleSubmit}>
//         {/* Recipe Title Input */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Recipe Title
//           </label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.title}
//           />
//           {formik.touched.title && formik.errors.title ? (
//             <p className="text-red-600 text-sm">{formik.errors.title}</p>
//           ) : null}
//         </div>

//         {/* Ingredients Textarea */}
//         <div className="mb-4">
//           <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
//             Ingredients
//           </label>
//           <textarea
//             id="ingredients"
//             name="ingredients"
//             rows="4"
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.ingredients}
//           />
//           {formik.touched.ingredients && formik.errors.ingredients ? (
//             <p className="text-red-600 text-sm">{formik.errors.ingredients}</p>
//           ) : null}
//         </div>

//         {/* Preparation Steps Textarea */}
//         <div className="mb-4">
//           <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
//             Preparation Steps
//           </label>
//           <textarea
//             id="steps"
//             name="steps"
//             rows="4"
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.steps}
//           />
//           {formik.touched.steps && formik.errors.steps ? (
//             <p className="text-red-600 text-sm">{formik.errors.steps}</p>
//           ) : null}
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit Recipe
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddRecipeForm;