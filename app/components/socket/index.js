import Config from 'web/config.js';
const socket = new WebSocket(Config.SOCKET_URL);

export default socket;
