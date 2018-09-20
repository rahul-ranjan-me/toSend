import React, { Component } from 'react'
import $ from 'jquery'
import property from '../property'
import '../css/createEditBlog.css'

export default class CreateEditBlog extends Component{
    constructor(props){
        super(props);
        this.state = {
            success: null,
            text : '',
            title: ''
        }
    }

    componentDidMount(){
        const blogId = this.props.blogId
        if(blogId){
            $.ajax({
                method: 'get',
                url: `${property.apiURL}${blogId}`,
                success: (data) => {
                    this.setState({
                        text: data.text,
                        title: data.title
                    })
                }
            })
        }
    }

    submitForm(){
        const blogId = this.props.blogId,
            apiURL = blogId ? property.apiURL+blogId : property.apiURL,
            data = {
                text: document.querySelector('#text').innerHTML,
                title: this.refs['title'].value
            }
        $.ajax({
            method: 'post',
            url: apiURL,
            data: data,
            success: (data) => {
                this.setState({
                    success: true
                })

                window.setTimeout( () => {
                    this.setState({
                        success: null
                    })  
                }, 5000)
            }
        })
    }

    render(){
        const { title, text, success } = this.state,
            { blogId } = this.props
        return(
            <div className="update-blog">
                { success ? <p className="success">Your blog has been updated</p> : undefined }
                <h2>{ blogId ? 'Edit Blog' : 'Create Blog' }</h2>
                <form>
                    <ul>
                        <li>
                            <label html-for="title">Title</label>
                            <input type="text" defaultValue={ title } id="title" ref="title" />
                        </li>
                        <li>
                            <label html-for="text">Description</label>
                            <div contentEditable='true' id="text">{ text }</div>
                        </li>
                    </ul>
                    <div className="action"> 
                        <button type="button" onClick={ this.submitForm.bind(this) }>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}