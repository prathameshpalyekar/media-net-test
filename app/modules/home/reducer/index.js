import {
  FETCH_DATA_SUCESS,
} from '../actions/subscribeData';

export const initialState = {
  data: [],
};

export default function stockDataReducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_DATA_SUCESS:
        const oldData = state.data.map((stock) => Object.assign({}, stock));
        const newStocks = action.data;
        newStocks.forEach((stock) => {
            const stockPresent = oldData.find((oldStock) => oldStock.name === stock.name);
            // Check last original value as there will be possibility of two stocks in one message
            const originalStock = state.data.find((oldStock) => oldStock.name === stock.name);
            if (stockPresent) {
                const lastValue = originalStock.currentValue;
                stockPresent.currentValue = stock.value;
                stockPresent.lastValue = lastValue;
                stockPresent.updatedAt = stock.time;
                stockPresent.data.push({
                    value: stock.value,
                    time: stock.time,
                });
            } else {
                const newStock = Object.assign({}, {
                    name: stock.name,
                    currentValue: stock.value,
                    lastValue: stock.value,
                    updatedAt: stock.time,
                    data: [{
                        value: stock.value,
                        time: stock.time,
                    }],
                });
                oldData.push(newStock);
            }
        })
        return { data: oldData };
    default:
        return state;
  }
}
