import React, { Component, useState } from "react"
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

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





    function postUser() {
        axios.post("http://localhost:4000/users/reg", user)
            .then(res => {
                console.log(res.data)

                //setStatusMessage("Success! you have been registered with username" + user.userID);
                setRegistered(true);
                console.log(registered);
            }).catch((error) => {
                console.log(error);

                //setStatusMessage("SOMETHING WENT WRLY WRONG")
            });
    }





    return (
        <div>

            <form onSubmit={postUser}>

                <input placeholder="Username" onChange={e => setUserName(e.target.value)} />
                <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <input placeholder="email" onChange={e => setEmail(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>


            {registered === true ? <Redirect to="/" /> : null}

        </div>
    )

}









export default Register;