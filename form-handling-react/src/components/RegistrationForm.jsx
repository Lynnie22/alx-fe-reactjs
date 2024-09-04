import { useState } from 'react'

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    })
    const [err, setErr] = useState("")

    const handleChange = (e) => {
        const {name , value} = e.target
        setFormData({...formData , [name]: value})
    }

    const handleSubmit = (e) => {
        const { email, password, username } = formData;
        e.preventDefault();

        if (!email || !password || !username) {
            setErr("All Feilds must be filled");
            return;
        }
        setErr("");
        console.log("submitted" , formData);
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" value={username} onChange={handleChange}/>
        <input type="text" name='email' id='email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
        <button type='submit'>Submit</button>
        <div style={{color: "red"}}>{err}</div>
    </form>
  )
}

export default RegistrationForm
