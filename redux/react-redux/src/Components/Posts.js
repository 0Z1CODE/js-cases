import React from "react";
import Post from "./Post";
import {connect} from "react-redux"

function Posts({ syncPosts }) {
  if (!syncPosts.length) {
    return `No posts, yet`;
  }
  console.log(syncPosts);
  return syncPosts.map((post) => <Post post={post } key={post.id} />);
}

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps,null)(Posts)
