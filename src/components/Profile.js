import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { connect } from "react-redux"
import { fetchUser } from '../actions'

class Profile extends Component {

    componentDidMount = () => {
        this.props.fetchUser()
    }

    renderField = (type, label, value, icon) => {
        return (
            <div className="field ui grid">
                <label className="left aligned grid"><h3>{label + ":"}</h3></label>
                <div className="ui left icon input">
                    <i style={{ left: "inherit" }} className={icon}></i>
                    <input type={type} value={value} readOnly />
                </div>
            </div>
        )
    }

    render() {
        if (this.props.user) {
            return (
                <div>
                    <Sidebar />
                    <div className="pusher">
                        <br /><br />
                        <br /><br />
                        <div className="ui grid">
                            <div className="ui middle aligned center aligned grid two column wide">
                                <div className="column">
                                    <h2 className="ui image header">
                                        <i className="user icon"></i>
                                        <div className="content">
                                            User's Profile
                                    </div>
                                    </h2>
                                    <br /><br />
                                    <form className="ui large form">
                                        {this.renderField("text", "Full Name", this.props.user.name, "user icon")}
                                        {this.renderField("email", "Email Address", this.props.user.email, "address book icon")}
                                        {this.renderField("number", "Age", this.props.user.age, "calendar outline icon")}
                                        {this.renderField("text", "Country", this.props.user.country, "flag icon")}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <>
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Fetching User's Profile</div>
                    </div>
                </>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return { user: state.users.user }
}

export default connect(mapStateToProps, { fetchUser })(Profile)
