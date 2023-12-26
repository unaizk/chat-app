const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');
const { addUser, removeUser, getUSer, getUsersInRoom} = require('./users')

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "*", // Replace with your actual frontend origin
    }
  });

app.use(router);
app.use(cors()); // Enable CORS for all routes


io.on('connection', (socket) => {
  console.log('We have a new connection');

  socket.on('join',({name,room},callback) =>{
    const { error, user} = addUser({id : socket.id, name, room})

    if(error) return callback(error)

    socket.emit('message',{user : 'admin' , text : `${user.name}, Welcome to the room ${user.room}`})
    socket.broadcast.to(user.room).emit('message', {user : 'admin', text: `${user.name} has joined`})

    socket.join(user.room);

    callback();
    
  })

  socket.on('sendMessage', (message, callback) =>{
    const user = getUser(socket.id);

    io.to(user.room).emit('message', {user : user.name, text : message});

    callback()
  })

  socket.on('disconnect', () => {
    console.log('User has disconnected.');


  });
});

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
