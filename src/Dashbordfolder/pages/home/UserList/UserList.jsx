import React, { useState } from 'react'
import '../UserList/UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../../DummyData';
import { Link } from 'react-router-dom';

export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDalate = (id) => {
        setData(data.filter((item)=> item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div >
                        <Link to={"/user/" + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={()=>handleDalate(params.row.id)}/>
                    </div>
                )
            }
        }
    ];
    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
