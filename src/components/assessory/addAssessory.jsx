'use client'
//src/app/components/addAssessory.js

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState} from "react";

function AddAssessory(props) {
  const [assessoryID, setAssessoryId]=useState('')
  const [assessoryName, setAssessoryName]=useState('')
  const [assessoryCreatedAt, setAssessoryCreatedAt]=useState('')

    const addAssessory = async(e)=> {
        e.preventDefault();
        try{
            //console.log("user id ", userId)
            console.log("accessories Name ", assessoryName)

            //POST Method
            const res = await axios({
                url: 'http://localhost:5000/accessories',
                method: 'post',
                data: {
                    "name": assessoryName, 
                    }
            })
            console.log("res", res.data)
            if (res.data.success=true) {
                
                setAssessoryName(''),
                 props.getAssessory()
                //alert("accessories added successfully!");
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
      <table className="table" style={{ maxWidth: "600px", margin: "auto" }}>
        <tr>
          <td>Assessory ID</td>
          <td>
            <input
              type="text"
              name="productId"
              value={assessoryID}
              className="form-control"
              onChange={(e)=>setAssessoryId(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Assessory Name</td>
          <td>
            <input
              type="text"
              name="productName"
              value={assessoryName}
              className="form-control"
              onChange={(e)=>setAssessoryName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Product ID</td>
          <td>
            <input
              type="text"
              name="productPrice"
              //value=""
              className="form-control"
              //onChange={()=>{}}
            />
          </td>
        </tr>
        <tr>
          <td>createdAt</td>
          <td>
            <input
              type="text"
              name="productPrice"
              value={assessoryCreatedAt}
              className="form-control"
              onChange={(e)=>setAssessoryCreatedAt(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn btn-success bg-success w-40 mt-5 p-2 mx-2" onClick={addAssessory}>
              Submit
            </button>
            <button className="btn btn-ganger bg-danger w-40 mt-5 p-2">
              Cancel
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

function ShowAssessory({assessory}) {
  const renderTable = () => {
    console.log({assessory})
    if(assessory?.length === 0) {
      return <></>;
    }
    return (
      assessory?.map((assessory, index) => (
        <tr key={assessory.id}> 
        <th scope="row">{index + 1}</th>
        <td>{assessory.id}</td>
        <td>{assessory.name}</td>
        <td>{assessory.productId}</td>
        <td>{assessory.createdAt}</td>
        <td>
          <button className="btn btn-success px-3 mx-3" >Edit</button>
          <button className="btn btn-danger" >Delete</button>
        </td>
      </tr>
    ))
  )
  }
  return (
    <>
    <div className="table-responsive justify-content-around w-75">
      <h2 className="mb-3">Show Assessory</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">AssessoryId</th>
            <th scope="col">AssessoryName</th>
            <th scope="col">ProductId</th>
            <th scope="col">createdAt</th>
          </tr>
        </thead>
        
        <tbody>
        {assessory?.length !== 0 && assessory?.map((assessory, index) => (
            <tr key={assessory.id}> 
              <th scope="row">{index + 1}</th>
              <td colspan="">{assessory.id}</td>
              <td>{assessory.name}</td>
              <td>{assessory.productId}</td>
              <td>{assessory.createdAt}</td>
              <td>
                <button className="btn btn-success px-3 mx-3" >Edit</button>
                <button className="btn btn-danger" >Delete</button>
              </td>
            </tr>
          ))}
          {renderTable()}
        </tbody>

      </table>
    </div>
    </>
  );
}
// onClick={()=> deleteUser(user.id)}

export { AddAssessory, ShowAssessory };
