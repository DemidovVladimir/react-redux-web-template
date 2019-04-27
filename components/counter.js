import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    decrementCount,
    incrementCount,
    resetCount,
    incrementAsyncCount
} from "../actions/example-actions";
import {bindActionCreators} from "redux";

class Counter extends Component {
    render() {
        const {count} = this.props
        return (
            <div>
                <h1>
                    Count: <span>{count}</span>
                </h1>
                <button onClick={() => this.props.incrementAsyncCount()}>+1</button>
                <button onClick={() => this.props.decrementCount()}>-1</button>
                <button onClick={() => this.props.resetCount()}>Reset</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {count} = state.example
    return {count}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            incrementAsyncCount,
            incrementCount,
            decrementCount,
            resetCount
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
