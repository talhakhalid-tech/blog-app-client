import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {

    renderField = ({ input, type, placeholder, icon }) => {
        return (
            <div className="field">
                <div className="ui left icon input">
                    <i className={icon}></i>
                    <input {...input} type={type} placeholder={placeholder} autoComplete="off" required />
                </div>
            </div>
        )
    }


    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form className="ui large form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name="email" type="email" placeholder="Email Address" icon="red address book icon" component={this.renderField} />
                <Field name="password" type="password" placeholder="Password" icon="red user secret icon" component={this.renderField} />
                <button className="ui fluid large red submit button">Login</button>
            </form>
        )
    }
}

export default reduxForm({
    form: "LoginForm"
})(LoginForm)
