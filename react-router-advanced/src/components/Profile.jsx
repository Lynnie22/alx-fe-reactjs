
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <nav>
      <Link to="details">Profile Details</Link> |{" "}
      <Link to="settings">Profile Settings</Link>
        </nav>

        <Outlet />
    </div>
  )
}

export default Profile
