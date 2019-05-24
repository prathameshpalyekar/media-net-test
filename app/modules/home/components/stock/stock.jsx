import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import cx from 'classnames';

const getPrettyNumber = (value) => parseFloat(value, 10).toFixed(2);

const stock = (props) => {
    const { name, currentValue, lastValue, data, updatedAt } = props.stock;
    const currentValueClass = cx('-value', {
        'up' : currentValue > lastValue,
        'down': currentValue < lastValue
    });

    return (
        <div className="col-sm-4 -stock">
            <div className="-stock-row">
                <div className="-name">{name}</div>
                <div className={currentValueClass}>{getPrettyNumber(currentValue)}</div>
                <div className="-time">
                    <TimeAgo date={updatedAt} />
                </div>
            </div>
        </div>
    );
}

export default stock;
