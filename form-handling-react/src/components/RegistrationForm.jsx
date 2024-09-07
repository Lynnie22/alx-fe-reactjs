import { useState } from 'react'

const RegistrationForm = () => {
    // const [formData, setFormData] = useState({
    //     username: "",
    //     email: "",
    //     password:"",
    // })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [err, setErr] = useState("")

    const handleChange = (e) => {
        const {name , value} = e.target
        // setFormData({...formData , [name]: value})

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "username") {
            setUsername(value);
        }
    }

    const handleSubmit = (e) => {
        // const { email, password, username } = formData;
        e.preventDefault();

        if (!email || !password || !username) {
            setErr("All Feilds must be filled");
            return;
        }
        setErr("");

        // console.log("submitted" , formData);

    }

  return (
    <form action="" onSubmit={handleSubmit} style={{display:"flex", flexDirection: "column", gap:"1rem"}}>
        <input type="text" name="username" id="username" value={username} onChange={handleChange} placeholder='Username'/>
        <input type="email" name='email' id='email' value={email} onChange={handleChange} placeholder='email'/>
        <input type="password" name='password' id='password' value={password} onChange={handleChange} placeholder='password' />
        <button type='submit'>Submit</button>
        <div style={{color:'red'}}>{err}</div>
    </form>
  )
}

export default RegistrationForm
