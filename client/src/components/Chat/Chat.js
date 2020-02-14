import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import "./Chat.css"
import InfoBar from "../infoBar/InfoBar"
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import axios from "axios";
let socket;





const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = "localhost:5000";

  function getMessages(currentRoom) {

    console.log(name)
    let messageObjectArray = [];

    console.log("room: " + currentRoom);

    axios.get("http://localhost:4000/messages").then(messagesDB => {

      messagesDB.data.forEach(message => {



        if (currentRoom === message.room) {
          let tempObject = { user: message.userID, text: message.message }
          messageObjectArray.push(tempObject);

        }
      });

      messageObjectArray.push({ user: "admin", text: `${name}, welcome to ${room} chat away!` });

      setMessages(messageObjectArray);
    });



    console.log(messages);
  }

  if (messages.length < 1) {
    getMessages(room);
  }




  useEffect(() => {
    const { room } = queryString.parse(location.search);
    const name = localStorage.getItem("user");
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);


    socket.emit("join", { name, room }, () => {

    });


    // getMessages(room);

    return () => {
      socket.emit("disconnect")
      socket.off();
    }
  },
    [ENDPOINT, location.search]);







  useEffect(() => {
    socket.on("message", (message) => {

      setMessages([...messages, message]);
    })
  }, [messages])

  const sendMessage = (event) => {

    event.preventDefault();

    if (message) {
      let messageObject = {
        userID: name,
        message: message,
        room: room
      }

      axios.post("http://localhost:4000/messages/post", messageObject).then(data => {
        console.log(data);
      })


      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  }



  return (
    <div className="outerContainer">
      <div className="chat-container" >
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

      </div>
    </div>
  )
}

export default Chat;