"use client";
//src/app/components/addProduct.js

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import axios from "axios";
import Pagination from "../pagination/pagination";
  
function AddUser(props) {
  //const [userId, setUserId] = useState('')    //state
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userJwtToken, setUserJwtToken] = useState("");

  //POST APIs for users
  const addUser = async (e) => {
    e.preventDefault();
    try {
      //console.log("user id ", userId)
      console.log("user Name :", userName);
      console.log("user Email :", userEmail);
      console.log("user password :", userPassword);
      //console.log("user jwt token :", userJwtToken);

      //POST Method
      const res = await axios({
        url: "http://localhost:5000/users",
        method: "post",
        data: {
          username: userName,
          email: userEmail,
          password: userPassword
        },
      });
      console.log("res", res.data);
      if ((res.data.success = true)) {
        //setUsers(res.data.users);
        setUserName(""), 
        setUserEmail(""),
        setUserPassword(""),
        //setUserJwtToken(""), 
        props.getUser();
        //alert("User added successfully!");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.response.data.error);
    }
  };

  //function to handle page change
  const handlePageChange = (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
  };

  //users cancel btn pressed
  const cancelAddUser=()=>{
    setUserName(""), 
    setUserEmail(""), 
    setUserPassword(""),
    //setUserJwtToken(""),
    props.getUser();
  }

  return (
    <>
      <table className="table w-25 m-auto">
        <thead>
        <tr>
          <td>User Name</td>
          <td>
            <input
              type="text"
              name="User Name"
              value={userName}
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>User Password</td>
          <td>
            <input
              type="text"
              name="User Password"
              value={userPassword}
              className="form-control"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </td>
        </tr>
        {/* <tr className="mt-5">
          <td>User Jwt Token</td>
          <td>
            <input
              type="text"
              name="User Jwt Token"
              value={userJwtToken}
              className="form-control"
              onChange={(e) => setUserJwtToken(e.target.value)}
            />
          </td>
        </tr> */}
        </thead>

        <tbody>
        <tr>
          <td colSpan="2">
            <button
              className="btn btn-success bg-success w-40 mt-3 p-2 mx-2"
              onClick={addUser}
            >
              Submit
            </button>
            <button className="btn btn-danger bg-danger w-40 mt-3 p-2" onClick={cancelAddUser}>
              Cancel
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <hr />
    </>
  );
}


function ShowUser({ users, getUser }) {
  //delete user
  const [userId, setUserId] = useState('')    //state
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  //DELETE User
  const deleteUser = async (id) => {
    //e.preventDefault();
    console.log('delete button pressed !!')
    try {
      console.log("user id :", id)
      const res = await axios({
        url: `http://localhost:5000/users/${id}`,
        method: "delete",
      });
      console.log("res", res.data);
      //setUsers(res.data.users);
      
      if ((res.data.success = true)) {
        alert("User deleted successfully!");
        getUser();
      } else {
        alert("Something went wrong!");
      }
      console.log('users try section ...')
    } catch (error) {
      //console.error("Error:", error);
      //alert("Network error: Unable to reach the server.");
    }
  };

  //PUT APIs for users 
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: "", email: "" });

  const editUserModel = (user) => {
    console.log('edit dualogue open..')
    //setUserName(""), 
    //setUserEmail(""),
    //getUser();

    setSelectedUser(user);
    setUpdatedData({ name: user.name, email: user.email });
  };

  //dialogue model update btn press
  const handleUpdate = async (id) => {
    try {
      console.log("Updating user:", id);
      const res = await axios({
        url: `http://localhost:5000/users?id=${id}`,
        method: "put",
        data: {
          name: userName,
          email: userEmail
        },
      });
      if (res.data.success) {
        alert("User updated successfully!");
        getUser(); // Refresh user list
        setSelectedUser(null); // Close modal
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  //function to handle page change
  const handlePageChange = (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
  };

  //dialog model cancel click 
  const handleCancel = () => {
    setSelectedUser(null); // Close modal without changes
  };

  return (
    <>
      <div className="table-responsive justify-content-around w-100">
        <h2 className="mb-3">Show Users Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserId</th>
              <th scope="col">UserName</th>
              <th scope="col">UserEmail</th>
              <th scope="col">UserPassword</th>
              <th scope="col">UserJwtToken</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.jwtToken}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                    //className="btn btn-success px-3 mx-3"
                    className="btn btn-success px-3 mx-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editUserModal"
                    onClick={()=>editUserModel(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
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

      {/* Edit User Modal */}
      {selectedUser && (
        <div
          className="modal fade show"
          id="editUserModal"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="editUserModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editUserModalLabel">
                  Edit User Model
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCancel}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">User Id : </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                   
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={users.name}
                      onChange={(e) =>setUpdatedData(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={users.email}
                      onChange={(e) =>setUpdatedData(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { AddUser, ShowUser };
