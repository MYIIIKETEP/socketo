import React, { Component, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom";


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusmsg] = useState('');


    const login2 = (e) => {
        e.preventDefault();
        axios.get("http://localhost:4000/users/").then(users => {

            users.data.forEach(user => {
                setStatusmsg("");
                if (user.userID === userName) {
                    if (user.password === password) {
                        localStorage.setItem("user", userName);
                        return true
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
        <div><input placeholder="UserName" type="text" onChange={(event)=>setUserName(event.target.value)}/></div>
        <div><input placeholder="Password" type="text" onChange={(event)=>setPassword(event.target.value)}/></div>
        <Link onClick={  !userName || !password ? event.preventDefault():null}to={"/join"}><button type="submit">Login</button></Link>
    </div>
        )






}

export default Login;

