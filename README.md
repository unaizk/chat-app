# Realtime Chat App

This is a simple realtime chat application built with React on the client side and Node.js with Express on the server side. It uses Socket.IO for real-time communication between clients and the server.

## Features

- Real-time chat with other users in the same room.
- User can join a specific chat room by providing a username and room name.
- Responsive design for a seamless experience on various devices.

## Technologies Used

- **Client Side:**
  - React
  - Socket.IO Client

- **Server Side:**
  - Node.js
  - Express
  - Socket.IO

## Setup

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/realtime-chat-app.git
Navigate to the project directory:

bash
Copy code
cd realtime-chat-app
Install dependencies for both the client and server:

bash
Copy code
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
Usage
Start the server:

bash
Copy code
cd server
npm start
The server will be running at http://localhost:5000.

Start the client:

bash
Copy code
cd client
npm start
The client will be running at http://localhost:3000.

Open your browser and go to http://localhost:3000 to use the realtime chat app.
