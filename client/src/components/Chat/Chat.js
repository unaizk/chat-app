import React, { useState, useEffect } from 'react'
import './Chat.css'
import queryString from 'query-string';
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom'; // Import useLocation
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';


let socket;
const Chat = () => {

  const [name , setName] = useState('');
  const [room, setRoom] =useState('');
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const ENDPOINT = 'localhost:5000'

  const location = useLocation(); // Use useLocation hook to get the location object
  useEffect(()=>{
    const {room, name} = queryString.parse(location.search)

    socket = io(ENDPOINT)
    setName(name);
    setRoom(room)

    socket.emit('join',{name,room},() =>{
     
    })

    // cleaning code or connection when unmounting component
    return () =>{
      socket.emit('disconnect')

      socket.off()
    }

  },[ENDPOINT, location.search])


  useEffect(()=>{
    socket.on('message', (message) =>{
      setMessages([...messages, message])
    })
  },[messages])

  // function for sending message
  const sendMessage = (event) =>{
    event.preventDefault();

    if(message){
      socket.emit('sendMessage', message, () =>setMessage(''))
    }
  }

  console.log(message, messages);
  return (
    <div className='outerContainer'> 
      <div className='container'>
        <InfoBar room={room}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

      </div>
    </div>
  )
}

export default Chat