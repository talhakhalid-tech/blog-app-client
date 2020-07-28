import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { connect } from "react-redux"
import { createBlog } from '../actions'


class CreateBlog extends Component {

    state = { titleChar: 200, bodyChar: 10000, title: "", body: "" }

    titleChange = (e) => {
        this.setState({ title: e.target.value, titleChar: 200 - e.target.value.length })
    }
    bodyChange = (e) => {
        this.setState({ body: e.target.value, bodyChar: 10000 - e.target.value.length })
    }

    onBlogSave = () => {
        this.props.createBlog({ title: this.state.title, body: this.state.body })
    }


    render() {
        return (
            <div className="ui container">
                <Sidebar color="purple" />
                <div className="pusher">
                    <br /><br />
                    <br /><br />
                    <div className="ui grid">
                        <div className="ui one column wide">
                            <div className="column">
                                <h2 className="ui image header">
                                    <i className="blogger icon"></i>
                                    <div className="content">
                                        Write Your Blog
                                    </div>
                                </h2>
                                <div className="ui form">
                                    <div className="field">
                                        <div className="ui grid">
                                            <label className="left floated two wide column "><h4>Blog's Title:</h4></label>
                                            <p className="right floated three wide column" style={{ color: "grey" }}>{this.state.titleChar} characters remaining</p>
                                        </div>
                                        <input value={this.state.title} onChange={this.titleChange} type="text" />
                                    </div>
                                    {" "}
                                    <div className="field">
                                        <div className="ui grid">
                                            <label className="left floated two wide column "><h4>Blog's Body:</h4></label>
                                            <p className="right floated three wide column" style={{ color: "grey" }}>{this.state.bodyChar} characters remaining</p>
                                        </div>
                                        <textarea value={this.state.body} onChange={this.bodyChange} rows="13"></textarea>
                                    </div>
                                    <button onClick={this.onBlogSave} className="ui fluid large black submit button">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { createBlog })(CreateBlog)
