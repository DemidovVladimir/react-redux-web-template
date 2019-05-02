import React, {Component} from 'react'
import { connect,  } from 'react-redux'
import {getUsers} from "../actions/db-actions";
import {bindActionCreators} from "redux";

class Examples extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.getUsers()}>Get users</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {data} = state.example;
    return {data}
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getUsers
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Examples)
