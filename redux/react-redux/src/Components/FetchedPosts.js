import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { axiosPost } from "./../redux/actions";

function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.getPosts);  
 return (
   
   <>
  {posts?.length == 0 &&  <button className="btn btn-primary" onClick={() => (dispatch(axiosPost()), console.log(posts))}>
      Load
    </button>}  
   {posts?.map((post) => <Post post={post} key={post.id} />)}
   </>
 )
}
export default FetchedPosts;
