import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="container">
                <div className="notification">
                    <h2>{this.props.count}</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counterReducer
    };
}

export default connect(mapStateToProps)(Counter);