# Media Net Live Stock App
Shows real time stock data with graphical representation

## Running Project on Local

### Run node.js

- `cd media-net-test` - Project folder
- `npm install`
- `npm start`
- Open at http://localhost:9000

### Features

- Dashboard showing prices for different stocks
- Each component contains stock name, current value, last updated at and lastest 5 stock values on graph
- Stock value is highlighted based on its last price

### Live demo

Live demo can be found at https://live-stock-app.firebaseapp.com/

#### Issues
- given page is loaded over https while app tries to connect to insecure websocket endpoint 'ws://stocks.mnet.website/' because of which app doesn't show data
- same issue goes while uploading app to github pages

#### Quick resolve
- enabling browser to load unsafe script will fetch data from socket.
- It is not recommended but robust solution for this can be considered under enhancement.
