import { Outlet, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Navigation links to the nested routes */}
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* The Outlet component renders the nested route components */}
      <Outlet />
    </div>
  );
}

export default Profile;