import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { subscribeData } from '../actions/subscribeData';
import Stock from './stock/stock';
const shortid = require('shortid');

import './home.less';

class Home extends Component {
    getArragedStocks() {
        const { stocks } = this.props;
        const arrangedStocks = [];
        for (let index = 0; index < stocks.length; index += 3) {
            const stocksRow = [];
            const stock0 = stocks[index];
            const stock1 = stocks[index + 1];
            const stock2 = stocks[index + 2];
            stock0 && stocksRow.push(stock0);
            stock1 && stocksRow.push(stock1);
            stock2 && stocksRow.push(stock2);
            const data = {
                id: shortid.generate(),
                stocksRow,
            };
            arrangedStocks.push(data);
        }
        return arrangedStocks;
    }

    render() {
        return (
            <div className="home-dashboard">
                <div className="-stock-table">
                    {this.getArragedStocks().map((stocksRowData) => {
                        const { id, stocksRow } = stocksRowData;
                        return (
                            <div key={id} className="row">
                                {stocksRow.map((stock) => <Stock stock={stock} key={stock.name}/> )}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}

export default Home;
