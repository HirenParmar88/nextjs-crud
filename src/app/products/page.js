// src/app/products/page.js

"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import {AddProduct, ShowProduct} from "@/components/product/addProduct.jsx";
import BtnHome from '@/components/backbtn/backButton.jsx';
import Pagination from '@/components/pagination/pagination.jsx';
import axios from 'axios';
import { useEffect,useState } from 'react';

function AddProductPage(  ){
  const [products, setProducts]= useState([]);
  const [loading, setLoading]= useState(false);
  const [page, setPage]= useState(1);
  const [limit, setLimit]=useState(10);

  useEffect(()=>{
    console.log('Page & Limit ',page,limit);
    getProduct(page, limit);
    return()=>{

    }
  },[page, limit])

  //GET product
  const getProduct=async(page, limit)=>{
    setLoading(true);
    try{
    const res= await axios({
      url:`http://localhost:5000/products?page=${page}&limit=${limit}`,
      method:'get'
    })
    console.log(res.data)
    setProducts(res.data.products)
  }catch(err){
    console.error('error to get products !!',err);
  }finally{
    setLoading(false);
  }
  };

  //function to handle page change
  const handlePageChange=(newPage, newLimit)=>{
    setPage(newPage);
    setLimit(newLimit);
  }
  return(
    <div>
      <h2 className='text-center mb-4 mt-2'>Add Product </h2>
      <AddProduct getProduct={getProduct} />
      <Pagination onPageChange={handlePageChange}/>
      <ShowProduct products={products} getProduct={getProduct}/>
      <BtnHome/>
    </div>
   
  );
}
export default  AddProductPage;
