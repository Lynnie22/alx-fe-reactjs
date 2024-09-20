
import { useState } from 'react'

const Search = () => {
    const [user, setUser] = useState("");

    const handleSubmit = () => {
        const userData = aysnc fetch("https://api.github.com/users/")
        const response = await 
    }
  return (
    <div>
      <form action="">
        <input type="text" name='user' id='user' value={user}  />
        <button onSubmit={handleSubmit}>Search User</button>
      </form>
    </div>
  )
}

export default Search
