import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <div className="breadcrumb">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> > </li>
                <li>Contact us</li>
            </ul>
        </div>
    )
}