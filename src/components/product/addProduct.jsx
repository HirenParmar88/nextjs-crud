'use client'
//src/app/components/addProduct.js

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function AddProduct(props) {
  //const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('')

  const addProduct=async(e)=>{
    e.preventDefault();
    try{
      console.log("productName", productName)
      console.log("productPrice", productPrice)
      console.log("productDescription", productDescription)
    const res=await axios({
      url:'http://localhost:5000/products',
      method:'post',
      data:{
        "product_name":productName,
        "price":parseFloat(productPrice),
        "description":productDescription
      }
    })
    console.log(res.data)
    // return false;
    if(res.data.success=true){
      setProductName(''), //state 
      setProductPrice(''),
      setProductDescription(''),
      props.getProduct();
    }else{
      console.log('else part is executed !!')
    }
  }catch(error){
    console.error("error !!!",error)
  }
}

//function to handle page change
const handlePageChange=(newPage, newLimit)=>{
  setPage(newPage);
  setLimit(newLimit);
}

  return (
    <>
      <table className="table" style={{ maxWidth: "600px", margin: "auto" }}>
        <tbody>
        <tr>
          <td>Product Name</td>
          <td>
            <input
              type="text"
              name="productName"
              value={productName}
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Product Price</td>
          <td>
            <input
              type="text"
              name="productPrice"
              value={productPrice}
              className="form-control"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Product description</td>
          <td>
            <input
              type="text"
              name="productDescription"
              value={productDescription}
              className="form-control"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button
              className="btn btn-success bg-success w-40 mt-5 p-2 mx-2"
              onClick={addProduct}
            >
              Submit
            </button>
            <button className="btn btn-ganger bg-danger w-40 mt-5 p-2">
              Cancel
            </button>
          </td>
        </tr>
        </tbody>
        
      </table>
      </>
  );
}

function ShowProduct({ products }) {

  return (
    <>
    <div className="table-responsive justify-content-around w-75">
      <h2 className="mb-3">Show Products Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ProductId</th>
            <th scope="col">ProductName</th>
            <th scope="col">ProductPrice</th>
            <th scope="col">description</th>
            <th scope="col">userId</th>
            <th scope="col">createdAt</th>
            <th scope="col">updatedAt</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
export { AddProduct, ShowProduct };
