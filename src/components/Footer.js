import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; Mohamed Mustafa 2021</p>
            <Link style={{textDecoration:'none', color:'red'}} to="/about">About</Link>
        </footer>
    )
}

export default Footer
