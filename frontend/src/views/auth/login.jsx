import { useState } from "react";
import { login } from "../../api/api";
import { useNavigate } from "react-router";




export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({username: "", pwd: ""});
    const [message, setMessage] = useState("")
    


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const loginUser = await login(user);
        navigate("/profile");
        window.location.reload();
        localStorage.setItem("auth", loginUser.token);
        
        
    }

    return (
        <main>
            <h1>
                Sign in 
            </h1>
            <form action="" method="POST" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="username">Your username : </label>
                        <input onChange={handleChange} type="text" id="username" name="username" placeholder="Enter your username here..." />
                    </li>
                    <li>
                        <label htmlFor="pwd">Your password : </label>
                        <input onChange={handleChange} type="password" id="pwd" name="pwd" placeholder="Enter your username here..." />
                    </li>
                </ul>
                <p>{message}</p>
                <button type="submit">Login</button>
            </form>
        </main>
    );
}