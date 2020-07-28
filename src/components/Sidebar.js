import React, { Component } from 'react'
import { logoutUser } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Sidebar extends Component {

    onLogout = () => {
        this.props.logoutUser()
    }

    renderLogInfo = () => {
        if (localStorage.getItem("authToken")) {
            return (
                <>
                    <Link className="item" style={{ color: this.props.color, position: "static" }} to="/AllUsers">
                        <i className="user icon"></i>
                        All Users
                    </Link>
                    <Link className="item" style={{ color: this.props.color, position: "static" }} to="/Profile">
                        <i className="user icon"></i>
                    Profile
                    </Link>
                    <Link className="item" style={{ color: this.props.color, position: "static" }} to="/CreateBlog">
                        <i className="pencil icon"></i>
                        Write Blog
                    </Link>
                    <div className="right item" style={{ color: this.props.color, position: "static", cursor: "pointer" }} onClick={this.onLogout}>
                        <i className="user circle icon"></i>
                        Logout
                    </div>
                </>
            )
        }
        return (
            <>
                <Link className="right item" style={{ color: this.props.color, position: "static" }} to="/Login">
                    <i className="user circle icon"></i>
                        Login
                </Link>
                <Link className="item" style={{ color: this.props.color, position: "static" }} to="/Register">
                    <i className="user circle outline icon"></i>
                        Register
            </Link>
            </>
        )
    }

    render() {
        return (
            <div className="ui very wide visible top sidebar menu" >
                <div className="item" style={{ height: "50px", fontSize: "30px", color: this.props.color, fontWeight: "bold", position: "static" }}>
                    <i className="blogger b icon"></i>
                        TBlog
                </div>
                <Link className="item" style={{ color: this.props.color, position: "static" }} to="/">
                    <i className="home icon"></i>
                        Home
                </Link>
                {this.renderLogInfo()}
            </div>
        )
    }
}

export default connect(null, { logoutUser })(Sidebar)