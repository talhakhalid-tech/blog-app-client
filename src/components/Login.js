import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import LoginForm from './forms/LoginForm'
import Sidebar from './Sidebar'

class Register extends Component {

    onFormSubmit = (formValues) => {
        this.props.loginUser(formValues)
    }

    render() {
        return (
            <>
                <Sidebar color="red" />
                <div className="pusher">
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <div className="ui item">
                        <div className="ui center aligned middle aligned grid two column wide">
                            <div className="column">
                                <h2 className="ui red image header">
                                    <i className="user circle icon"></i>
                                    <div className="content">
                                        Login to your Account
                        </div>
                                </h2>
                                <LoginForm onSubmit={this.onFormSubmit} />
                                <div className="ui message">
                                    New to us? <a href="/Register" style={{ color: "red" }}>{" "}Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, { loginUser })(Register)
