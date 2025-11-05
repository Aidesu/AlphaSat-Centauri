import { useState } from "react";
import { getUser } from "../../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router";


export default function Profile() {
    const navigate = useNavigate();
    const token = localStorage.getItem("auth");

    const [user, setUser] = useState("");

    useEffect(() => {
        async function fetchData() {
            const user = await getUser(token);
            setUser(user);
        }
        fetchData();
    }, [token]);

    

    function disconnect() {
        localStorage.removeItem("auth");
        window.location.reload();
        navigate("/");
        
    }

    return(
        <main>
            <h1>
                Account page of {user ? user.username : "No one"}
            </h1>
            <button onClick={disconnect}>Disconnect</button>
        </main>
    );
}