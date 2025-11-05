
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { getUser } from '../../api/api';

export default function Header() {
    const token = localStorage.getItem("auth");
    const [user, setUser] = useState("");

   useEffect(() => {
           async function fetchData() {
               const user = await getUser(token);
               setUser(user);
           }
           fetchData();
       }, [token]);
    
    return (
        <>
            <header>
                <h2>AlphaSat Centauri</h2>
                <nav>
                    <Link to={"/"}>Home</Link>
                    
                    {token ? <Link to={"/profile"}>{user.username}</Link> : <><Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link></>}
                </nav>
            </header>
        </>
    );
}