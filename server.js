const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('BrawlBlast PeerJS Server running'));

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('Server listening on port', PORT);
});

const peerServer = ExpressPeerServer(server, {
  path: '/',
  key: 'brawlblast',
  corsOptions: { origin: '*' }
});

app.use('/peerjs', peerServer);
