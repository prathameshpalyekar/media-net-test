import React from 'react';
import Stock from './stock/stock';

import './home.less';

const Home = (props) => {
    const { stocks } = props;
    return (
        <div className="home-dashboard">
            <div className="-stock-table">
                {stocks.map((stock) => {
                    const { name } = stock;
                    return (
                        <Stock stock={stock} key={stock.name}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
