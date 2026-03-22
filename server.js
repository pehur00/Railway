const { PeerServer } = require('peer');
const server = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  corsOptions: { origin: '*' }
});
console.log('PeerJS server running on port', process.env.PORT || 9000);
