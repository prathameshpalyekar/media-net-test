import socket from 'components/socket';

export const unsubscribeData = () => {
    socket.close();
}