import React, {Component} from 'react'
import { connect,  } from 'react-redux'
import {getUsers} from "../actions/db-actions";
import {bindActionCreators} from "redux";
import 'isomorphic-unfetch';

class Examples extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault();
        this.fileUpload()
    }

    onChange(e) {
        const uploadedFile = e.target.files[0];
        var reader  = new FileReader();
        reader.addEventListener("load", () => {
            const base64Image = reader.result.split('base64,')[1];
            this.setState({
                fileContent: base64Image,
                fileName: uploadedFile.name,
                fileType: uploadedFile.type
            })
        }, false);

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    fileUpload(){
        return fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/crossroad-zyama/service/crossroad/incoming_webhook/postpicture', {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: JSON.stringify({
                picture: this.state.fileContent,
                bucket: 'crossroad-user-files',
                fileName: this.state.fileName,
                fileType: this.state.fileType
            })
        })
            .then( response => console.log(response) )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <input type="file" onChange={this.onChange} />
                    <button type="submit">Upload</button>
                </form>
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
