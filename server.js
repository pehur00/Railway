const { PeerServer } = require('peer');
const server = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  allow_discovery: true,
  corsOptions: { origin: '*' }
});
server.on('connection', (client) => console.log('connected:', client.getId()));
server.on('disconnect', (client) => console.log('disconnected:', client.getId()));
console.log('PeerJS server running');
