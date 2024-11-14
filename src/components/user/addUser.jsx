'use client'
//src/app/components/addProduct.js

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

function AddUser(props) {
    //const [userId, setUserId] = useState('')    //state 
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const addUser = async(e)=> {
        e.preventDefault();
        try{
            //console.log("user id ", userId)
            console.log("user Name ", userName)
            console.log("user Email ", userEmail)

            //POST Method
            const res = await axios({
                url: 'http://localhost:5000/users',
                method: 'post',
                data: {
                    "username": userName, 
                    "email": userEmail
                    //"createdAt": userCreatedAt

                }
            })
            console.log("res", res.data)
            if (res.data.success=true) {
                
                //setUsers(res.data.users);
                setUserName(''),
                setUserEmail(''),
                props.getUser()
                //alert("User added successfully!");
            } else {
                alert("Something went wrong!");
            }
        }catch(error){
            console.error("Error:", error);
            alert("Network error: Unable to reach the server.");
        }
    }

  return (
    <>

      <table className="table w-25 m-auto">
        <tr>
          <td>User Name</td>
          <td>
            <input
              type="text"
              name="User Name"
              value={userName}
              className="form-control"
              onChange={(e)=> setUserName(e.target.value)}
            />
          </td>
        </tr>
        <tr className="mt-5">
          <td>User Email</td>
          <td>
            <input
              type="text"
              name="User Email"
              value={userEmail}
              className="form-control"
              onChange={(e)=> setUserEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn btn-success bg-success w-40 mt-3 p-2 mx-2" 
            onClick={addUser}>
              Submit
            </button>
            <button className="btn btn-danger bg-danger w-40 mt-3 p-2">
              Cancel
            </button>
          </td>
        </tr>
      </table>
      <hr/>
      </>
  );
}

function ShowUser({ users }) {

  //delete user
  const deleteUser= async(id)=>{
    // e.preventDefault();
    if (confirm("Are you sure you want to delete this user?")) {
      try{
        console.log('delete user function work !! ', id)
        const res = await axios({
          url:`http://localhost/5000/users?id=${id}`,
          method:'delete',
          headers: {
            "Content-Type": 'application/json'
          }
        })
        console.log(res.data)
        if(res.data.success===true){
          console.log('user deleted successfully:',id)
          props.getUser();
        }
        //console.log('ok button pressed !!', id);
      }catch(err){
        console.error('something want wrong !!', err);
      }
    } else {
      //txt = "You pressed Cancel!";
      console.log('cancel pressed !!');
    }
  
  }

  return (
    <>
    <div className="table-responsive justify-content-around w-75">
      <h2 className="mb-3">Show Users Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserId</th>
            <th scope="col">UserName</th>
            <th scope="col">UserEmail</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Operations</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td colspan="">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>
                <button className="btn btn-success px-3 mx-3" >Edit</button>
                <button className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
    </>
  );
}
// onClick={editUser}
export { AddUser, ShowUser };
