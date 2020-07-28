import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'
import RegisterForm from './forms/RegisterForm'
import Sidebar from './Sidebar'

class Register extends Component {

    onFormSubmit = (formValues) => {
        this.props.registerUser(formValues)
    }

    render() {
        return (
            <>
                <Sidebar color="teal" />
                <div className="pusher">
                    <br /><br />
                    <div className="ui grid">
                        <div className="ui middle aligned center aligned grid two column wide">
                            <div className="column">
                                <h2 className="ui teal image header">
                                    <i className="user circle icon"></i>
                                    <div className="content">
                                        Register your Account
                        </div>
                                </h2>
                                <RegisterForm onSubmit={this.onFormSubmit} />
                                <div className="ui message">
                                    Already have Account? <a href="/Login" style={{ color: "teal" }}>{" "}Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, { registerUser })(Register)
