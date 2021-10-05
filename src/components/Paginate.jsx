import React from "react";
import "./style/Paginate_style.css";
import { SpsButton, SpsTextInput, SpsDropdown } from "@spscommerce/ds-react";

const Paginate = ({
  currentPageNo,
  setCurrentPageNo,
  postsPerPage,
  setPostsPerPage,
  totalPosts,
  totalPages,
  indexOfFirstPost,
  indexOfLastPost,
}) => {
  const handlePageSelect = (e) => {
    if (e.target.value.match(/[~`!@#$%^&*()\-_+=\\|{}\\["':;<>?/</>,.]/)) {
      setCurrentPageNo(1);
    } else {
      let parsed = parseInt(e.target.value);

      if (parsed > totalPages) {
        setCurrentPageNo(totalPages);
        console.log(currentPageNo);
      } else if (parsed < 1) {
        setCurrentPageNo(1);
      } else {
        setCurrentPageNo(parsed);
      }
    }

    e.target.value = "";
  };

  return (
    <>
      <div className="paginationContainer">
        {/* VIEW */}
        <div className="view">
          <span className="span __viewText span__viewText--1">View</span>

          <SpsDropdown
            id="regular"
            label={postsPerPage}
            options={[
              [
                { label: "25" },
                () => {
                  setPostsPerPage(25);
                  setCurrentPageNo(1);
                },
              ],
              [
                { label: "50" },
                () => {
                  setPostsPerPage(50);
                  setCurrentPageNo(1);
                },
              ],
              [
                { label: "100" },
                () => {
                  setPostsPerPage(100);
                  setCurrentPageNo(1);
                },
              ],
            ]}
          />
          <span className="span viewText span__viewText--2">Per Page</span>
        </div>

        {/* STATUS */}
        <div className="status">
          <span className="span__ViewingText">
            Viewing {indexOfFirstPost + 1} - {indexOfLastPost} of {totalPosts}
          </span>
        </div>

        {/* PAGE SELECT */}
        <div className="pageSelect">
          <SpsTextInput
            type="text"
            placeholder={currentPageNo}
            onChange={(e) => handlePageSelect(e)}
            className="input__pageSelect"
          />
          <span className="span__pageSelectText">of {totalPages}</span>
          <SpsButton
            className="ml-1 mb-1"
            onClick={() => {
              setCurrentPageNo(currentPageNo - 1);
            }}
            disabled={currentPageNo <= 1 ? true : false}
          >
            <i className="fas fa-chevron-left"></i>
          </SpsButton>

          <SpsButton
            className="ml-1 mb-1"
            onClick={() => {
              setCurrentPageNo(currentPageNo + 1);
            }}
            disabled={currentPageNo >= totalPages ? true : false}
          >
            <i className="fas fa-chevron-right"></i>
          </SpsButton>
        </div>
      </div>
    </>
  );
};

export default Paginate;
