import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import moment from 'moment'
import property from '../property'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../css/blogList.css'

export default class BlogList extends Component{
    constructor(props){
        super(props);
        this.deleteBlog = this.deleteBlog.bind(this)
        this.createBlogList = this.createBlogList.bind(this)
        this.createBlogDetail = this.createBlogDetail.bind(this)
        this.state = {
            blogList : [],
            deleted: null
        }
    }

    componentDidMount(){
        this.getBlog()
    }

    componentWillReceiveProps(){
        this.getBlog()
    }

    getBlog(){
        $.ajax({
            method: 'get',
            url: property.apiURL,
            success: (data) => {
                this.setState({
                    blogList: data
                })
            }
        })
    }

    createBlogList(blog){
        return <li key={ blog.id }><span className="title">{ blog.title }</span> <br /> <span className="time">{ moment('2018-09-19T07:20:47.473Z').format('MMMM Do YYYY, h:mm:ss a') }</span></li>
    }

    deleteBlog(id){
        $.ajax({
            method: 'delete',
            url: property.apiURL+id,
            success: (data) => {
                this.setState({
                    deleted: id,
                })

                this.getBlog()

                window.setTimeout(()=> {
                   this.setState({
                        deleted: null
                    }) 
                }, 5000)
            }
        })
    }

    createBlogDetail(blog){
        const blogId = blog.id,
            editBlogLink = `/edit-blog/${blogId}`

        return (
            <li key={blogId}>
                <p><span className="title">{ blog.title }</span> <br /> <span className="time">{ moment('2018-09-19T07:20:47.473Z').format('MMMM Do YYYY, h:mm:ss a') }</span></p>
                <p>{ blog.text }</p>
                <p className="action-link"><span className="edit-delete" onClick={() => this.deleteBlog(blogId) }>Delete Blog</span> | <Link className="edit-delete" to={ editBlogLink }>Edit Blog</Link></p>
            </li>
        )
    }

    render(){
        const { blogList, deleted } = this.state

        return(
            <div className="page-container">
                <Header />
                <div className="content-container">
                    <div className="blog-list">
                        <ul>
                            { blogList.map(this.createBlogList) }
                        </ul>
                        <Link to="/create-blog" className="create-new-post-button">Create New Post</Link>
                    </div>
                    <div className="blog-detail">
                        { deleted ? <p className="deleted">Your blog with id <strong>{ deleted }</strong> deleted successfully</p> : undefined }
                        <ul>
                            { blogList.map(this.createBlogDetail) }
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}