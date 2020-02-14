import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"


const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer col-3">
                <img className="online-icon" src={onlineIcon} alt="online icon" />
            </div>

            <h3 className="mx-auto col-6">Welcome to {room}!</h3>

            <div className="RightInnerContainer col-2">

                <a href="/join"> <img className="close-icon" src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;