import React, { useState } from 'react';
import '../productList/ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { productRows } from '../../DummyData'
import { Link } from 'react-router-dom';

export default function ProductList() {

  const [data, setData] = useState(productRows);

  const handleDalate = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div >
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={() => handleDalate(params.row.id)} />
          </div>
        )
      }
    }
  ];

  return (
    <div className='productList'>
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
