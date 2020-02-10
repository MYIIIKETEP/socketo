import React, { Component, useState } from "react"
import axios from "axios"
import { Link, Redirect } from "react-router-dom";


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusmsg] = useState('');
    const [validation, setValidation] = useState(false);


    const getValidation = (e) => {
        // e.preventDefault();
        axios.get("http://localhost:4000/users/").then(users => {

            users.data.forEach(user => {

                if (user.userID === userName) {
                    if (user.password === password) {
                        console.log(user.userID);
                        localStorage.setItem("user", userName);
                        setStatusmsg(`Welcome ${userName}`);
                        setValidation(true);
                        return true;
                    } else {
                        setStatusmsg("Wrong Password");
                        return false
                    }
                } else {
                    setStatusmsg("Wrong Username");
                    return false
                }
            })

        }).catch(error => console.log(error))

    }





    return (

        <div>
            <h1>Login</h1>
            <p>{statusMessage}</p>
            <div><input placeholder="UserName" type="text" onChange={(event) => setUserName(event.target.value)} /></div>
            <div><input placeholder="Password" type="text" onChange={(event) => setPassword(event.target.value)} /></div>

            <button onClick={getValidation}>Login</button>
            <Link to="/reg"><button>Register</button></Link>
            {(!validation) ? null : <Redirect to="/join"></Redirect>}

        </div>

    )





}

export default Login;

