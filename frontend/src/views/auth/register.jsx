
import { useState } from "react";
import { register } from "../../api/api";

export default function Register() {
    const [user, setUser] = useState({username: "", pwd: ""});
    const [message, setMessage] = useState("");
    
    
        const handleChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value})
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const registerUser = await register(user);
            if (registerUser.success) {
                setMessage("User succefuly register");
    
            } else {
                setMessage(registerUser.message);
            }
        }

    return (
        <main>
            <h1>
                Sign up
            </h1>
            <form action="" method="POST" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="username">Your username : </label>
                        <input type="text" onChange={handleChange} name="username" placeholder="Enter your username here..." />
                    </li>
                    <li>
                        <label htmlFor="pwd">Your password : </label>
                        <input type="password" onChange={handleChange} name="pwd" placeholder="Enter your username here..." />
                    </li>
                </ul>
                <p>{message}</p>
                <button type="submit">Register</button>
            </form>
        </main>
    );
}