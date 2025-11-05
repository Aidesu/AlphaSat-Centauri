export const login = async (userObj) => {
    const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(userObj)
    })
    const user = await response.json();
    return user;
}

export const register = async (userObj) => {
    const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(userObj)
    })
    const user = await response.json();
    return user;
}

export const getUser = async (token) => {
    const response = await fetch("http://localhost:3000/api/user/profile", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Brearer ${token}`
        }
    });
    const user = await response.json();
    return user;
}