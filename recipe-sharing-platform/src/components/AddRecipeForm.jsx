
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddRecipeForm = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Recipe title is required'),
    ingredients: Yup.string()
      .required('Ingredients are required'),
    steps: Yup.string()
      .required('Preparation steps are required'),
  });

  // Using useFormik hook for form handling
  const formik = useFormik({
    initialValues: {
      title: '',
      ingredients: '',
      steps: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // You can handle form submission here
      console.log('Form data:', values);
      // Post the data to your server or add it to your state
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add a New Recipe</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Recipe Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <p className="text-red-600 text-sm">{formik.errors.title}</p>
          ) : null}
        </div>

        {/* Ingredients Textarea */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ingredients}
          />
          {formik.touched.ingredients && formik.errors.ingredients ? (
            <p className="text-red-600 text-sm">{formik.errors.ingredients}</p>
          ) : null}
        </div>

        {/* Preparation Steps Textarea */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            rows="4"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.steps}
          />
          {formik.touched.steps && formik.errors.steps ? (
            <p className="text-red-600 text-sm">{formik.errors.steps}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;