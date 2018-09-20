import React, { Component } from 'react'
import moment from 'moment'
import $ from 'jquery'
import Header from '../components/Header'
import Footer from '../components/Footer'
import property from '../property'
import BreadCrumb from '../components/Breadcrumb'

export default class BlogDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            text: '',
            time: ''
        }
    }

    componentDidMount(){
        $.ajax({
            method: 'get',
            url: `${property.apiURL}${this.props.match.params.blogId}`,
            success: (data) => {
                this.setState({
                    text: data.text,
                    title: data.title,
                    time: data.time
                })
            }
        })
    }

    render(){
        const { title, time, text } = this.state
        return (
            <div className="page-container">
                <Header />
                
                <div className="content-container">
                    <BreadCrumb title={title} />
                    <h1>{ title } </h1>
                    <p className="time">{moment(time).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>{ text }</p>
                </div>
                <Footer />
            </div>
        )
    }
}