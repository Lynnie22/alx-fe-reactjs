
// import './App.css'
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import Profile from './components/Profile';
// import ProfileSettings from './components/ProfileSettings';
// import ProfileDetails from './components/ProfileDetails';
// import BlogPost from './components/BlogPost';

// function App() {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Profile />,
//       children: [
//         {
//           path: "/details",
//           element : <ProfileDetails />,
//         },

//         {
//           path: "/settings",
//           element: <ProfileSettings />,
//         }
//       ]
//     },
//     {
//       path: "blog/:postId", 
//       element: <BlogPost />,
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App


import './App.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import ProfileDetails from './components/ProfileDetails';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import { useState } from 'react';




function App() {
// Simulated authentication state (false means not logged in, true means logged in)
const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>

      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Profile page route with nested routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        
        {/* Dynamic blog post route */}
        <Route path="blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
