import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import cx from 'classnames';
import moment from 'moment';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const getPrettyNumber = (value) => parseFloat(value, 10).toFixed(2);

const stock = (props) => {
    const { name, currentValue, lastValue, data, updatedAt } = props.stock;
    const currentValueClass = cx('-value', {
        'up' : currentValue > lastValue,
        'down': currentValue < lastValue
    });
    const chartData = data.slice(-5).map((datum) => {
        const { value, time } = datum;
        const timeValue = moment(time).format('mm:ss');
        return {
            value,
            time: timeValue,
        };
    })

    return (
        <div className="-stock">
            <div className="-stock-row">
                <div className="-name">{name}</div>
                <div className={currentValueClass}>{getPrettyNumber(currentValue)}</div>
                <div className="-time">
                    <TimeAgo date={updatedAt} />
                </div>
            </div>
            <div className="-stock-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={400} height={150} data={chartData}>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis dataKey="time"/>
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default stock;
