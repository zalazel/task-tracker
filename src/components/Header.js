import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({onAdd, showAdd}) => {
    

    const location =  useLocation()

    return (
        <header>
            <h1 className="header">Task Tracker</h1>
            {location.pathname === '/' && <Button onClick = {onAdd}
                color={showAdd ? 'red' :'green'}
                text={showAdd ? 'Close' : 'Add'}
            
            />}
        </header>
    )
}

export default Header