import React from 'react'
import '../Sidebar/Sidebar.css'
import { LineStyle, Timeline, TrendingUp, Redeem, PersonOutline, WorkOutline, Message, Report, MonetizationOn, Assessment, MailOutline, DynamicFeed, } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
        return (
                <div className='sidebar'>
                        <div className="sidebarwrapper">
                                <div className="sidebarMenu">
                                        <h3 className="sidebarTitle">Dashbord</h3>
                                        <ul className='sidebarList'>
                                                <Link exact to="/" style={{textDecoration:"none",color:"inherit"}} >
                                                <li className='sidebarListItem active'>
                                                        <LineStyle className='sidebarIcon' />
                                                        Home
                                                </li>
                                                </Link>
                                                <li className='sidebarListItem'>
                                                        <Timeline className='sidebarIcon' />
                                                        Analytics
                                                </li>
                                                <li className='sidebarListItem'>
                                                        <TrendingUp className='sidebarIcon' />
                                                        Sales
                                                </li>

                                        </ul>
                                </div>
                                <div className="sidebarMenu">
                                        <h3 className="sidebarTitle">Quick Menu</h3>
                                        <ul className='sidebarList'>
                                                <Link to="/users" style={{textDecoration:"none",color:"inherit"}}>
                                                        <li className='sidebarListItem'>
                                                                <PersonOutline className='sidebarIcon' />
                                                                Users
                                                        </li>
                                                </Link>
                                                <Link to="/productsList" style={{textDecoration:"none",color:"inherit"}}>
                                                <li className='sidebarListItem'>
                                                        <Redeem className='sidebarIcon' />
                                                        Products
                                                </li>
                                                </Link>
                                                <li className='sidebarListItem'>
                                                        <MonetizationOn className='sidebarIcon' />
                                                        Transaction
                                                </li>
                                                <li className='sidebarListItem'>
                                                        <Assessment className='sidebarIcon' />
                                                        Reports
                                                </li>

                                        </ul>
                                </div>
                                <div className="sidebarMenu">
                                        <h3 className="sidebarTitle">Notifcations</h3>
                                        <ul className='sidebarList'>
                                                <li className='sidebarListItem'>
                                                        <MailOutline className='sidebarIcon' />
                                                        Mail
                                                </li>
                                                <li className='sidebarListItem'>
                                                        <DynamicFeed className='sidebarIcon' />
                                                        Feedback
                                                </li>
                                                <li className='sidebarListItem'>
                                                        <Message className='sidebarIcon' />
                                                        Messages
                                                </li>

                                        </ul>
                                </div>
                                <div className="sidebarMenu">
                                        <h3 className="sidebarTitle">Staff</h3>
                                        <ul className='sidebarList'>
                                                <li className='sidebarListItem'>
                                                        <WorkOutline className='sidebarIcon' />
                                                        Manage
                                                </li>
                                                <li className='sidebarListItem'>
                                                        <Timeline className='sidebarIcon' />
                                                        Analytics
                                                </li>
                                                <li className='sidebarListItem'>
                                                        <Report className='sidebarIcon' />
                                                        Reports
                                                </li>

                                        </ul>
                                </div>
                        </div>
                </div>
        )
}
