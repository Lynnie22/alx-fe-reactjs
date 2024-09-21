
import { useState } from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {
    const [user, setUser] = useState("");
    const [userData, setData] = useState([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState(null);

    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState(0);

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

    const handleLocation = () => {

    }

    const handleMinRepo = () => {

    }
    
    
  return (
    <div  className=' w-full h-screen flex justify-center items-center'>
      <div className='glass px-10 w-8/12 flex justify-center items-center'>
          
                <form onSubmit={handleSubmit} className='my-4'>
                  <div>
                  <input type="text" value={user} placeholder='Enter username' onChange={handleSearch} className='bg-transparent outline-none border-b-2 border-b-black text placeholder-black my-4 mx-2'/>
                  </div>
              
                  <div>
                  <input type="text" value={location} placeholder='Enter users location' onChange={handleLocation}  className='bg-transparent outline-none border-b-2 border-b-black text placeholder-black my-4 mx-2'/>
                  </div>

                  <div>
                  <input type="text" placeholder='Minimum repositories' value={minRepos} onChange={handleMinRepo} className='bg-transparent outline-none border-b-2 border-b-black text placeholder-black my-4 mx-2' />
                  </div>
              
              <button type='submit' className='rounded-full color bg-red-200 p-2 text-red-950 font-bold border-red-400'>Search User</button>
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
      
    </div>
  )
}

export default Search
