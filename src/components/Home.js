import React, { Component } from 'react'
import "../styles/Home.css"
import Sidebar from './Sidebar'
import { fetchBlogs, resetBlog, resetUserBlogs } from '../actions'
import { connect } from 'react-redux'
import moment from "moment"
import history from "../history"

class Home extends Component {

    componentDidMount() {
        this.props.fetchBlogs()
        this.props.resetBlog()
        this.props.resetUserBlogs()
    }

    onBlogClick = (id) => {
        history.push("/Blog/" + id)
    }

    onUserClick = (authorID) => {
        history.push("/User/" + authorID)
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
                            Blog by: <b onClick={this.onUserClick.bind(this, blog.authorID)} style={{ cursor: "pointer" }}>{blog.author}</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.blogs) {
            return (
                <div>
                    <Sidebar color="brown" />
                    <div className="ui container pusher">
                        <br /><br />
                        {this.props.blogs.map(elem => {
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
    return { blogs: state.blogs.blogs }
}

export default connect(mapStateToProps, { fetchBlogs, resetBlog, resetUserBlogs })(Home)
