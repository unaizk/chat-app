import React, { useState, useEffect } from 'react'
import './Chat.css'
import queryString from 'query-string';
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom'; // Import useLocation


let socket;
const Chat = () => {

  const [name , setName] = useState('');
  const [room, setRoom] =useState('');
  const ENDPOINT = 'localhost:5000'

  const location = useLocation(); // Use useLocation hook to get the location object
  useEffect(()=>{
    const {room, name} = queryString.parse(location.search)

    socket = io(ENDPOINT)
    setName(name);
    setRoom(room)

    socket.emit('join',{name,room})

  },[ENDPOINT, location.search])
  return (
    <div>Chat</div>
  )
}

export default Chat