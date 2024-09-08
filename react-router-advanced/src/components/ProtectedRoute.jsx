import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    // Redirects to login page if user is not authenticated
    return <Navigate to="/login" />;
  }

  // Render the children (protected component) if authenticated
  return children;
}

export default ProtectedRoute;
