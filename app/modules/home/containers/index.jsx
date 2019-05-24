import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { subscribeData } from '../actions/subscribeData';

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(subscribeData());
    }

    render() {
        const { Layout, stocks } = this.props;
        return (
            <div>
                <Layout stocks={stocks}/>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    stocks: state.stocks.data || [],
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
