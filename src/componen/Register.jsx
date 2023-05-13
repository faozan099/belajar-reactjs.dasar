import { useState } from "react";

function Register (){

    const[username, setUsername] = useState ("")
    const[password, setPassword] = useState ("")

    const inputPassword = (Event) => {
        setPassword(Event.target.value)
    }

    const inputUsername = (Event) => {
        setUsername(Event.target.value)
    }

    const Register = (event) => {
        event.preventDefault()

        console.log("username", username)
        console.log("password", password)
    }

    return(
        <>
        <form onSubmit={Register}>
            <h1>Register</h1>
            <input 
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={inputUsername} />
            <br />
            <input type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={inputPassword} />
            <br />
            <button>Register</button>
        </form>
        </>
    )
}

export default Register