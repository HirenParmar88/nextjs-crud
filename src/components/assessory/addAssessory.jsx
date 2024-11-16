'use client'
//src/app/components/addAssessory.js

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import Pagination from "../pagination/pagination";

function AddAssessory(props) {
  //const [assessoryID, setAssessoryId]=useState('')
  const [assessoryName, setAssessoryName] = useState("")
  const [productId, setProductId] = useState('')

  //POST Apis for accessories
  const addAssessory = async (e) => {
    console.log("submit button clicked !!");
    e.preventDefault();
    try {
      console.log(" accessoriey Name :", assessoryName);
      console.log(" product id :", productId);

      const res = await axios({
        url: "http://localhost:5000/accessories",
        method: "post",
        data: {
          accessory_name: assessoryName,
          product_id: productId
        },
      });
      console.log('res',res.data);

      if ((res.data.success = true)) {
        setAssessoryName(""), 
        setProductId(""),
        props.getAssessory();
        alert("accessories added successfully!");
      } else {
        //console.log("add accessories else part is executed !!");
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error while you add accessories !!!", error);
      alert("Network error: Unable to reach the server.");
    }
  };

  //function to handle page change
  const handlePageChange = (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
  };

  //add accessories cancel btn pressed !
  const cancelBtnPressed=()=>{
    setAssessoryName(""), 
    setProductId(""),
    props.getAssessory();
  }
  
  return (
    <>
      <table className="table" style={{ maxWidth: "600px", margin: "auto" }}>
        <thead>
        <tr>
          <td>Assessory Name</td>
          <td>
            <input
              type="text"
              name="accessoryName"
              value={assessoryName}
              className="form-control"
              onChange={(e) => setAssessoryName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Product Id</td>
          <td>
            <input
              type="text"
              name="productId"
              value={productId}
              className="form-control"
              onChange={(e) => setProductId(e.target.value)}
            />
          </td>
        </tr>
        
        </thead>
        <tbody>
        <tr>
          <td colSpan="2">
            <button
              className="btn btn-success bg-success w-40 mt-5 p-2 mx-2"
              onClick={addAssessory}
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

function ShowAssessory({ accessories, getAccessory }) {
  // const renderTable = () => {
  //   console.log({accessories})
  //   if(accessories?.length === 0) {
  //     return <></>;
  //   }
  
  //DELETE APIs for Accessories
  const deleteAssessory=async(id)=>{
    console.log('delete btn clicked !!')
    try {
      console.log("accessory id :", id)
      const res = await axios({
        url: `http://localhost:5000/accessories/${id}`,
        method: "delete"
      });
      console.log("res", res.data);

      if ((res.data.success = true)) {
        alert("accessories deleted successfully!");
        getAccessory();
      } else {
        alert("Something went wrong!");
      }
      console.log('users try section ...')
    } catch (error) {
      console.error("Error:", error);
      alert("Network error: Unable to reach the server.");
    }
  }

  //Edit APIs for Accessories
  const editAssessory=()=>{
    console.log('edit btn pressed..')
  }

return (
  <>
    <div className="table-responsive justify-content-around w-75">
      <h2 className="mb-3">Show Acceessories</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">AssessoryId</th>
            <th scope="col">AssessoryName</th>
            <th scope="col">ProductId</th>
            <th scope="col">createdAt</th>
            <th scope="col">operations</th>
            </tr>
        </thead>

        <tbody>
        {accessories?.map((assessory, index) => (
          <tr key={assessory.id}>
            <th scope="row">{index + 1}</th>
            <td>{assessory.id}</td>
            <td>{assessory.name}</td>
            <td>{assessory.productId}</td>
            <td>{assessory.createdAt}</td>
            <td>
              <button className="btn btn-success px-3 mx-3" onClick={()=>editAssessory(assessory.id)}>Edit</button>
              <button className="btn btn-danger" onClick={()=>deleteAssessory(assessory.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>

      </table>
    </div>
  </>
);
}
// onClick={()=> deleteUser(user.id)}

export { AddAssessory, ShowAssessory };
