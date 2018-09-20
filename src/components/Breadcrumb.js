import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return(
        <div className="breadcrumb">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> > </li>
                <li>{props.title}</li>
            </ul>
        </div>
    )
}