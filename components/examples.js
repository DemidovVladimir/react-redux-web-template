import React, {Component} from 'react'
import { connect,  } from 'react-redux'
import {getPosts} from "../actions/example-actions";
import {bindActionCreators} from "redux";

class Examples extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.getPosts()}>View posts</button>
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
            getPosts
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Examples)
