import React, {Component} from 'react'
import { connect,  } from 'react-redux'
import {getUsers} from "../actions/db-actions";
import {bindActionCreators} from "redux";

class Examples extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.getUsers()}>Get users</button>
                <p>{this.props.users}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {users} = state.dbclient;
    return {users}
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
