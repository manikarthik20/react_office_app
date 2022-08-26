import React from 'react'
import { Link } from 'react-router-dom'
import '../product/Product.css'
import Chart from '../../charts/Chart'
import { productData } from '../../DummyData'
import { Publish } from '@material-ui/icons'

export default function Product() {
  return (
    <div className='products'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className="productInfoimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyStdws5fkVM1dGfR6g2lhZY3MQabzM3-wOx3sSZMpjUB4vneddBAKRN6eGRfWo4xH-1s&usqp=CAU" alt="" />
            <span className="productName">Apple AirPods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="ProductInfoKey">id:</span>
              <span className="productInfovalue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="ProductInfoKey">Sales:</span>
              <span className="productInfovalue">$123</span>
            </div>
            <div className="productInfoItem">
              <span className="ProductInfoKey">active:</span>
              <span className="productInfovalue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="ProductInfoKey">in Stock:</span>
              <span className="productInfovalue">no</span>
            </div>

          </div>
        </div>

      </div>
      <div className="productTopButtom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Apple Airpods'></input>
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value="yes">Yes</option>
              <option value="no">Np</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img className="productUploadImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyStdws5fkVM1dGfR6g2lhZY3MQabzM3-wOx3sSZMpjUB4vneddBAKRN6eGRfWo4xH-1s&usqp=CAU" alt="productUploadsImg"  />
              <label htmlFor="file">
                <Publish/>
              </label>
              <input type="fie" id="file" style={{display:"none"}}/>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
