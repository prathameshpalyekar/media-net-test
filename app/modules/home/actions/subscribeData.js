import socket from 'components/socket';
export const FETCH_DATA_SUCESS = 'FETCH_DATA_SUCESS';

export const subscribeData = () => {
    return (dispatch) => {
        socket.onmessage = (event) => {
            const result = JSON.parse(event.data);
            const time = Date.now();
            const stocks = result.map((stock) => {
                const name = stock[0];
                const value = stock[1];
                return Object.assign({}, {
                    name,
                    value,
                    time,
                });
            });
            dispatch({
                type: FETCH_DATA_SUCESS,
                data: stocks
            });
        }
    }
}