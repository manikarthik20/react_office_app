import React from 'react'
import '../Topbar/Topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className='topLeft'>
                    <span className='logo'>manikarthik</span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        
                    </div>
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
export default Topbar;
