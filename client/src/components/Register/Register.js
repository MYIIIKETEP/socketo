import React, { Component, useState } from "react"
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "./Register.css"


const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [registered, setRegistered] = useState(false);



    const user = {
        userID: userName,
        password: password,
        email: email
    }





    function postUser(e) {
        e.preventDefault();
        console.log("LOL")
        axios.post("http://localhost:4000/users/reg", user)
            .then(res => {
                setRegistered(true);
                localStorage.setItem("user", userName)
                console.log(res.data)

                //setStatusMessage("Success! you have been registered with username" + user.userID);

                console.log(registered);
            }).catch((error) => {
                console.log(error);

                //setStatusMessage("SOMETHING WENT WRLY WRONG")
            });
    }

    const hideLogin = () => {
        console.log(document.querySelectorAll(".login-outer-container"));
    }



    return (

        <div className="register-outer-container my-auto ">
            {hideLogin()}


            <h1 className="col-6 mx-auto">Register a user and start chatting!</h1>


            <form className=" form-group mx-auto col-4" onSubmit={postUser}>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                </div>


                <button className="btn btn-primary" type="submit" >Submit</button>

            </form>


            {(!registered) ? null : <Redirect to="/join" />}

        </div>
    )

}









export default Register;