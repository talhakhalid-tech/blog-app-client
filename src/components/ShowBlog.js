import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import moment from "moment"
import { fetchBlog } from '../actions'

class ShowBlog extends Component {

    componentDidMount = () => {
        this.props.fetchBlog(this.props.match.params.id)
    }

    render() {
        if (this.props.blog) {
            return (
                <div>
                    <Sidebar color="green" />
                    <div className="ui container pusher">
                        <br /><br />
                        <div style={{ width: "100%" }} className="ui card piled segment">
                            <div className="content">
                                <div className="header">{this.props.blog.title}</div>
                                <div className="meta">
                                    <span className="category">{moment(this.props.blog.date).fromNow()}</span>
                                </div>
                                <div className="description">
                                    <p style={{ lineHeight: 1.8 }}>{this.props.blog.body}</p>
                                </div>
                                <div className="extra content">
                                    <div style={{ color: "grey", fontStyle: "italic" }} className="right floated author">
                                        Blog by: <b>{this.props.blog.author}</b>
                                    </div>
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
                        <div className="ui large text loader">Fetching Blog</div>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { blog: state.blogs.blog }
}

export default connect(mapStateToProps, { fetchBlog })(ShowBlog)
