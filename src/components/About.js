import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <h4>Check the Full Project <a className="link" target="_blank" rel="noreferrer" href="https://github.com/zalazel/task-tracker.git">Here!</a></h4>
            
            <Link style={{textDecoration:'none', color:'blue'}} to="/">Go Back</Link>
            
        </div>
    )
}

export default About
