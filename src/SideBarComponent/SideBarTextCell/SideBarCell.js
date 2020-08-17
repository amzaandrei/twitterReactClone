import React from 'react'
import './SideBarCell.css'


const SideBarCell = ( { active, text, Icon }) => {
    return (
        <div className={`sidebarcell ${ active && "sidebarCell--active"}`}>
            <Icon />
            <h2>{ text } </h2>
        </div>
    )
}

export default SideBarCell
