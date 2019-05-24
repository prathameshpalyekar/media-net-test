export const CLEAR_STOCK_DATA = 'CLEAR_STOCK_DATA';

export const clearData = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_STOCK_DATA,
        });
    }
}