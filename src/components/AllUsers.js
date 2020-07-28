import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import { fetchAllUsers, resetUserBlogs } from '../actions'
import history from '../history'

class AllUsers extends Component {

    componentDidMount = () => {
        this.props.fetchAllUsers()
        this.props.resetUserBlogs()
    }

    onUserClick = (authorID) => {
        history.push("/User/" + authorID)
    }

    renderTableBody = (user) => {
        return (
            <tr key={user._id} style={{ color: "grey" }}>
                <td data-label="Name" style={{ cursor: "pointer" }} onClick={this.onUserClick.bind(this, user._id)}>{user.name}</td>
                <td data-label="Age">{user.age}</td>
                <td data-label="Job">{user.country}</td>
            </tr>)
    }

    render() {
        if (this.props.allUsers) {
            return (
                <div>
                    <Sidebar color="grey" />
                    <div className="pusher">
                        <br /><br />
                        <div className="ui grid">
                            <div className="ui middle aligned center aligned grid two column wide">
                                <div className="column">
                                    <h2 className="ui grey image header">
                                        <i className="user icon"></i>
                                        <div className="content">
                                            All TBlog Users
                                    </div>
                                    </h2>
                                    <br /><br />
                                    <table className="ui grey celled table">
                                        <thead>
                                            <tr><th style={{ color: "grey" }}><i className="user icon"></i>{" "}Full Name</th>
                                                <th style={{ color: "grey" }}><i className="calendar outline icon"></i>{" "}Age</th>
                                                <th style={{ color: "grey" }}><i className="flag icon"></i>{" "}Country</th>
                                            </tr></thead>
                                        <tbody>
                                            {this.props.allUsers.map(elem => {
                                                return this.renderTableBody(elem)
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Fetching TBlogs Users</div>
                    </div>
                </>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return { allUsers: state.users.allUsers }
}

export default connect(mapStateToProps, { fetchAllUsers, resetUserBlogs })(AllUsers)