import React, { Component } from 'react'
import "../styles/Home.css"
import Sidebar from './Sidebar'
import { fetchUserBlogs, resetBlog } from '../actions'
import { connect } from 'react-redux'
import moment from "moment"
import history from "../history"

class UserBlogs extends Component {

    componentDidMount() {
        this.props.fetchUserBlogs(this.props.match.params.id)
        this.props.resetBlog()
    }

    onBlogClick = (id) => {
        history.push("/Blog/" + id)
    }

    renderBlogs = (blog) => {
        return (
            <div style={{ width: "100%" }} className="ui card piled segment">
                <div className="content">
                    <div className="header">{blog.title}</div>
                    <div className="meta">
                        <span className="category">{moment(blog.date).fromNow()}</span>
                    </div>
                    <div className="description blogText">
                        <p>{blog.body}</p>
                    </div>
                    <p onClick={this.onBlogClick.bind(this, blog._id)} style={{ fontSize: "15px", color: "grey", cursor: "pointer" }}><b>Read More</b></p>
                    <div className="extra content">
                        <div style={{ color: "grey", fontStyle: "italic" }} className="right floated author">
                            Blog by: <b>{blog.author}</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.userBlogs) {
            return (
                <div>
                    <Sidebar color="blue" />
                    <div className="ui container pusher">
                        <br /><br />
                        <h2 style={{ fontStyle: "italic" }}>Blogs By User: {this.props.userBlogs[0].author}</h2>
                        {this.props.userBlogs.map(elem => {
                            return this.renderBlogs(elem)
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Fetching Blogs</div>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { userBlogs: state.blogs.userBlogs }
}

export default connect(mapStateToProps, { fetchUserBlogs, resetBlog })(UserBlogs)