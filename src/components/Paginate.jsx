import React, { useState } from "react";
import "./style/Paginate_style.css";

const Paginate = ({
  currentPageNo,
  setCurrentPageNo,
  postsPerPage,
  setPostsPerPage,
  totalPosts,
  totalPages,
}) => {
  const handlePostsPerPage = (e) => {
    setPostsPerPage(e.target.value);
  };

  const handlePageSelect = (e) => {
    if (e.key === "Enter") {
      setCurrentPageNo(e.target.value);
    }
  };

  return (
    <>
      <div className="paginationContainer">
        {/* VIEW */}
        <div className="view">
          <span className="span __viewText span__viewText--1">View</span>
          <div className="dropdown dropdown__inline">
            <button
              className="button__view--dropdown"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="span__buttonText">
                {postsPerPage} <i class="fas fa-chevron-down"></i>
              </span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="dropdown-item"
                  value={25}
                  onClick={(e) => handlePostsPerPage(e)}
                >
                  25
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  value={50}
                  onClick={(e) => handlePostsPerPage(e)}
                >
                  50
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  value={100}
                  onClick={(e) => handlePostsPerPage(e)}
                >
                  100
                </button>
              </li>
            </ul>
          </div>
          <span className="span viewText span__viewText--2">Per Page</span>
        </div>

        {/* STATUS */}
        <div className="status">
          <span className="span__ViewingText">
            Viewing {currentPageNo} - {postsPerPage} of {totalPosts}
          </span>
        </div>

        {/* PAGE SELECT */}
        <div className="pageSelect">
          <input
            type="text"
            onKeyDown={handlePageSelect}
            placeholder={currentPageNo}
            className="input__pageSelect"
          />
          <span className="span__pageSelectText">of {totalPages}</span>
          <button
            className="button__pageSelect--left"
            onClick={() => setCurrentPageNo(currentPageNo - 1)}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            className="button__pageSelect--right"
            onClick={() => setCurrentPageNo(currentPageNo + 1)}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Paginate;
