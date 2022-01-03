import React  from 'react';
import Post from './Post'

function FetchedPosts({posts}) {
  if (!posts.length ) {

    return (
      <>
        <button className='btn btn-primary' >Load</button>
      </>
    );
  }
  return posts.map((post, index) => <Post id={post} key={index} />);
}


export default FetchedPosts
