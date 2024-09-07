
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <nav>
      <Link to="details">Profile Details</Link> |{" "}
      <Link to="settings">Profile Settings</Link>
        </nav>
    </div>
  )
}

export default Profile
