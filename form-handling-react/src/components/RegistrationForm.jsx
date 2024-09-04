import { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password:"",
    })

    const handleChange = (e) => {
        const {name , value} = e.target
        setFormData({...formData , [name]: value})
    }

    const handleSubmit = (e) => {
        const { email, password, username } = formData;
        e.preventDefault();

        if (!email || !password || !username) {
            alert("input feilds cannot be empty");
        }
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange}/>
        <input type="text" name='email' id='email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default RegistrationForm
