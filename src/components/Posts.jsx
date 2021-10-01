import React, { useEffect, useState } from "react";
import axios from "axios";
import Paginate from "./Paginate";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  const indexOfLastPost = currentPageNo * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  let totalPosts = posts.length;
  let totalPages = totalPosts / postsPerPage;

  return (
    <>
      <ul className="list-group">
        {currentPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.id} {`.  `}
            {post.title}
          </li>
        ))}
      </ul>
      <Paginate
        currentPageNo={currentPageNo}
        setCurrentPageNo={setCurrentPageNo}
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        totalPosts={totalPosts}
        totalPages={totalPages}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
      />
    </>
  );
};

export default Posts;
