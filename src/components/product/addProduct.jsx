"use client";
//src/app/components/addProduct.js

import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { parseCookies } from 'nookies';

function AddProduct(props) {
  //const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const cookies = parseCookies()

  const addProduct = async (e) => {
    e.preventDefault();
    const token=cookies.token;

    try {
      console.log("productName", productName);
      console.log("productPrice", productPrice);
      console.log("productDescription", productDescription);
      const res = await axios({
        url: "http://localhost:5000/products",
        method: "post",
        data: {
          product_name: productName,
          price: parseFloat(productPrice),
          description: productDescription,
        },
        headers: {
          authentication: `Bearer ${token}`
        }
      });
      console.log(res.data);
      
      if ((res.data.success = true)) {
        setProductName(""), //state
        setProductPrice(""),
        setProductDescription(""),
        props.getProduct();
      } else {
        console.log("else part is executed !!");
      }
    } catch (error) {
      console.error("error !!!", error);
    }
  };

  //function to handle page change
  const handlePageChange = (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
  };

  //add products cancel btn pressed!!
  const cancelBtnPressed=()=>{
    setProductName(""), //state
    setProductPrice(""),
    setProductDescription(""),
    props.getProduct();
  }
  
  return (
    <>
      <table className="table" style={{ maxWidth: "600px", margin: "auto" }}>
        <thead></thead>
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
              <button className="btn btn-ganger bg-danger w-40 mt-5 p-2" onClick={cancelBtnPressed}>
                Cancel
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </>
  );
}

function ShowProduct({ products, getProduct }) {
  const cookies =parseCookies();
  const token = cookies.token;

  //EDIT products
  const editProductModel=()=>{
    console.log('edit fun called !!')
  }

  //DELETE Front-end APIs for products
  const deleteProduct= async(id) =>{
    console.log('delete btn click..')
    try{
      console.log('product id :', id)

      const res = await axios({
        url:`http://localhost:5000/products/${id}`,
        method: "delete",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`
        }
      });
      console.log('res',res.data)

      if((res.data.success=true)){
        alert('product deleted successfully !!!')
        getProduct();
      }else{
        alert('something went wrong !')
      }
    }catch(error){
      //console.error('error for delete products',error)
    }
  }

  return (
    <>
      <div className="table-responsive justify-content-around w-100">
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
              <th scope="col">operations</th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.userId}</td>
                <td>{product.createdAt}</td>
                <td>{product.updatedAt}</td>
                <td>
                  <button
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                    className="btn btn-success px-3 mx-3"
                    onClick={()=>editProductModel(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                    // onClick={deleteUser}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { AddProduct, ShowProduct };
