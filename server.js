// Import the Node Media Server package
const NodeMediaServer = require('node-media-server');

// Create a new Node Media Server instance
const nms = new NodeMediaServer({
  // Specify the server settings
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
});

// Start the server
nms.run();