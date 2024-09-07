import { useState } from 'react'

const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "username") {
            setUsername(value);
        }
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!username.trim()) {
            formErrors.username = "Username is required";
            isValid = false;
        }

        if (!email.trim()) {
            formErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!password.trim()) {
            formErrors.password = "Password is required";
            isValid = false;
        } else if (password.length < 6) {
            formErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        setError(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted", { email, password, username });
            setError({});  // Clear errors after successful form submission
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
            />
            {error.username && <div style={{ color: "red" }}>{error.username}</div>}

            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
            />
            {error.email && <div style={{ color: "red" }}>{error.email}</div>}

            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            {error.password && <div style={{ color: "red" }}>{error.password}</div>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;