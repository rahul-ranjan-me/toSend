import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/">Credit</Link></li>
                </ul>
            </nav>
        </footer>
    )
}