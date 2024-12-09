// src/app/users/page.js

"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import {AddUser, ShowUser} from "@/components/user/addUser.jsx";
import BtnHome from "@/components/backbtn/backButton.jsx";
import Pagination from '@/components/pagination/pagination.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AddUserPage(){
  const [users, setUsers] = useState([])  //state var
  const [loading, setLoading]= useState(false);
  const [page, setPage]= useState(1);
  const [limit, setLimit]=useState(10);

  useEffect(() => {
    getUser(page, limit);
    
    return () => {
      
    }
  }, [page, limit])

  //GET Users
  const getUser = async (page, limit)=> {
    setLoading(true);
    try{
    const res = await axios({
      url: `http://localhost:5000/users?page=${page}&limit=${limit}`,
      method: 'get',
    })
    console.log("res ", res.data)
    setUsers(res.data.users)
  }catch(err){
    console.error("error while fetching the users :",err);
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
      <h2 className='text-center mb-4 mt-2'>Add User </h2>
      <AddUser getUser={getUser}/>
      <Pagination onPageChange={handlePageChange}/>
      <ShowUser users={users} getUser={getUser} />
      <BtnHome />
    </div>
    </>
  );
}
export default  AddUserPage;