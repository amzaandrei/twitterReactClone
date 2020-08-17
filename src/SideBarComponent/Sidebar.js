import React from 'react'
import './Sidebar.css'
import SideBarCell from './SideBarTextCell/SideBarCell'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Button } from '@material-ui/core'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterlogo" />

            <SideBarCell active text="Home" Icon={HomeIcon}/>
            <SideBarCell text="Explore" Icon={SearchIcon}/>
            <SideBarCell text="Notifications" Icon={NotificationsNoneIcon}/>

            <Button variant="outlined" className="siderbar__twtbtn" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
