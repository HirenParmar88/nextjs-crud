// src/app/accessories/page.js

"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import BtnHome from '@/components/backbtn/backButton';
import {AddAssessory, ShowAssessory} from "@/components/assessory/addAssessory.jsx";
import Pagination from '@/components/pagination/pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';

function AddAssessoryPage(){
  const [accessories, setAssessory]=useState([]);
  const [loading, setLoading]= useState(false);
  const [page, setPage]= useState(1);
  const [limit, setLimit]=useState(10);
  const cookies=parseCookies()

  useEffect(()=>{
    getAssessory(page,limit);
    return()=>{

    }
  },[page,limit])

  //GET APIs for Assessory
  const getAssessory = async (page, limit)=> {
    console.log('get accessories calling...')
    setLoading(true);
    const token=cookies.token;
    try{
    const res = await axios({
      url: `http://localhost:5000/accessories?page=${page}&limit=${limit}`,
      method: 'get',
      headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type": 'application/json'
      }
    })
    //console.log("res ", res.data)
    console.log(res.data)
    setAssessory(res.data.accessories)
  }catch(err){
    console.error("error while fetching the accessory :",err);
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
    <>
    <div>
      <h2 className='text-center mb-4 mt-2'>Add Assessory Form </h2>
      <AddAssessory getAssessory={getAssessory}/>
      <Pagination onPageChange={handlePageChange}/>
      <ShowAssessory accessories={accessories} getAccessory={getAssessory}/>
      <BtnHome />
    </div>
    </>
  );
  
}

export default  AddAssessoryPage;
