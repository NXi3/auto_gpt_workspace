const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { exec } = require('child_process');
const { join } = require('path');
const { createReadStream } = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');
const { createWriteStream } = require('fs');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'www', 'stream.html'));
});

httpServer.listen(3000, () => {
  console.log('Listening on port 3000');
});