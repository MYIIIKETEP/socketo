import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css"

const Join = () => {
    //[1.Name of prop,2.Function connected to prop] = 3.ValueOfProp
    const [room, setRoom] = useState('');



    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!room) ? event.preventDefault() : null} to={`/chat?room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;