import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { subscribeData } from '../actions/subscribeData';
import { clearData } from '../actions/clearData';

class Home extends Component {
    constructor(props) {
        super(props);
        this.clearData = this.clearData.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(subscribeData());
    }

    clearData() {
        const { dispatch } = this.props;
        dispatch(clearData());
    }

    render() {
        const { Layout, stocks } = this.props;
        return (
            <div>
                <Layout stocks={stocks} clearData={this.clearData}/>
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
