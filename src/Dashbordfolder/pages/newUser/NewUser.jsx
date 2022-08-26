import React from 'react'
import '../newUser/NewUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder='Durga99'></input>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Durga Prasad'></input>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='Durga123@gmail.com'></input>
                </div>
                <div className="newUserItem">
                    <label>PassWord</label>
                    <input type="password" placeholder='Password'></input>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="email" placeholder='+1 123 456 78 '></input>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="email" placeholder='New York | USA'></input>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value="male"></input>
                        <label htmlFor='male'>Male</label>
                        <input type="radio" name='gender' id='female' value="female"></input>
                        <label htmlFor='female'>Female</label>
                        <input type="radio" name='gender' id='others' value="others"></input>
                        <label htmlFor='others'>Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>

            </form>
        </div>
    )
}
