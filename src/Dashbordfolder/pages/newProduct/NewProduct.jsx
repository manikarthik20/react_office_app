import React from 'react'
import '../newProduct/NewProduct.css'

function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id='file'></input>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder='Apple Airpods'></input>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder='123'></input>
        </div>
        
        <div className="addProductItem">
          <label>Active</label>
          <select className='addProductSelect' name='active' id='active'>
            <option value="yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>

      </form>
    </div>
  )
}
export default NewProduct;
