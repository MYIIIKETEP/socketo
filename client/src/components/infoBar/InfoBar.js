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

            <h3>{room}</h3>

            <div className="RightInnerContainer">
          
                <a href="/join"> <img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar;