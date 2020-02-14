import React, { Component, useState } from "react"
import axios from "axios"
import { Link, Redirect } from "react-router-dom";
import "./Login.css"

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

    const logout = () => {
        localStorage.clear();
        setValidation(false)
    }


    return (

        <div id="login-outer-container" className={`login-outer-container mx-auto my-auto col-2 ${(window.location.href) != "http://localhost:3000/reg" ? null : "hide"}`}>
            {console.log(window.location.href)}

            {(!localStorage.getItem("user")) ? <div> <h1>Login</h1>
                <p>{statusMessage}</p>

                <div className="form-group mx-auto">

                    <label >Username</label>
                    <input className="form-control " placeholder="username" id="username" type="text" onChange={(event) => setUserName(event.target.value)} />
                </div>

                <div>
                    <label >Password</label>
                    <input className="form-control " placeholder="password" id="password" type="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                {(!validation) ? null : <Redirect to="/join"></Redirect>}
                <button className="btn btn-primary mr-1 mt-1 col-5" onClick={getValidation}>Login</button>

                <Link to="/reg"><button id="reg-button" className="btn btn-primary mt-1 col-6">Register</button></Link></div> : <div><h1>Welcome  {localStorage.getItem("user")} </h1>

                    <button className="btn btn-danger" onClick={logout}><Link to="/">Logout</Link></button>

                    <Redirect to="/join"></Redirect></div>

            }
        </div >
    )
}

export default Login;

