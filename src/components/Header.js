import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <header>
            <span className="logo"><Link to="/">SalesForce Blog</Link></span>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create-blog">Create blog post</Link></li>
                </ul>
            </nav>
        </header>
    )
}