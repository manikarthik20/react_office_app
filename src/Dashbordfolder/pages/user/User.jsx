import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '../user/User.css'

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className='userAddButton'>Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://thumbs.dreamstime.com/b/alone-tree-mountain-96883108.jpg" className='userShowImg' alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Durga Prasad</span>
                            <span className="userShowUserTitle">SoftWare Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">Durga99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+1 123 4567 89</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">durga123@gamil.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='Durga99' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>FullName</label>
                                <input type="text" placeholder='Durga Prasad' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='durga123@gamil.com' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder='+1 123 4567 89' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpadteRight">
                            <div className="userUpdateUpload">
                                <img className='userUpdateImg' src="https://image.shutterstock.com/image-photo/young-man-looking-sunrise-260nw-321921797.jpg" alt="" />
                                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
