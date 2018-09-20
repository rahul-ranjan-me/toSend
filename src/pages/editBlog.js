import React from 'react'
import CreateEditBlog from '../components/CreateEditBlog'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default (props) => {
    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <CreateEditBlog blogId={props.match.params.blogId} />
            </div>
            <Footer />
        </div>
    )
}