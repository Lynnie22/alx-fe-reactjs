
import { useState } from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {
    const [user, setUser] = useState("");
    const [userData, setData] = useState([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (e) => {
      setUser(e.target.value)
    }

    const handleSubmit = async(e) => {
      e.preventDefault();

      setLoading(true);
      setError(null);

      try {
        const data = await fetchUserData(user)
        setData(data)
      }
      catch(error) {
        setError(`Looks like we cant find the user`, error);
      }
      finally{
        setLoading(false);
      }
    }
    
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={user} placeholder='Enter username' onChange={handleSearch}  />
        <button type='submit'>Search User</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={`${userData.login} avatar `} />
          <p>
            <a href={userData.html_url} target='_blank' rel='noopener noreferral'> View Profile</a>
          </p>

        </div>
      )}
    </div>
  )
}

export default Search
