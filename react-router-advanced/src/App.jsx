
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import ProfileDetails from './components/ProfileDetails';
import BlogPost from './components/BlogPost';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
      children: [
        {
          path: "/details",
          element : <ProfileDetails />,
        },

        {
          path: "/settings",
          element: <ProfileSettings />,
        }
      ]
    },
    {
      path: "blog/:postId", // Dynamic segment in the URL
      element: <BlogPost />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
