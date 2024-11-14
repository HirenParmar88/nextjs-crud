'use client'

// src/components/pagination/pagination.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap";
// import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Pagination({onPageChange}) {
  const [pageLimit, setPageLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    onPageChange(currentPage, pageLimit);
  },[currentPage, pageLimit, onPageChange]);

  const currPageChangeState = (page) => {
    //console.log('btn clicked....')
    //setCounter(counter + 1);
    setCurrentPage(page.target.v);
  };
  const pageLimitChange = (limit) => {
    console.log("current page", limit);
    setPageLimit(limit);
    setCurrentPage(1);  //Reset to first page when page limit changes
  };

  const handleNext = () => {
    console.log("next");
    setCurrentPage((currentPage)=>currentPage + 1);
    
  };

  const handlePrev = () => {
    console.log("prev");
    //setCurrentPage(currentPage-1)
    if (currentPage > 1) {
      setCurrentPage((currentPage)=>currentPage - 1);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end px-3 mt-3">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            rows per page
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => pageLimitChange(10)}
              >
                10
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => pageLimitChange(50)}
              >
                50
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => pageLimitChange(100)}
              >
                100
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="btn mx-2 btn-outline-secondary "
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
          type="button"
          className="btn btn-outline-primary mx-2 active"
          onClick={()=>currPageChangeState(currentPage)}
        >
          {currentPage}
        </button>

        <button
          type="button"
          className="btn mx-2 btn-outline-secondary"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
