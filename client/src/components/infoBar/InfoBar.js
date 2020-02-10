import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"


const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="online icon" />
            </div>

            <h3> {room}</h3>

            <div className="RightInnerContainer">
                {/* a href kan bli knas i react för en gör en full page refresh
                i det här fallet behövs en refresh det är därför vi använder det
            */}
                <a href="/"> <img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;