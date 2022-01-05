import React  from 'react';


function Post({post, id}) {
  return (
    <>
     <div className='card'>
       <div className='card-body'>
         <h5 className='card-titlr d-flex justify-content-between align-items-center'>
          {post?.title}
          <button className='btn btn-danger'>{"<"}</button>
         </h5>
       </div>
     </div>
    </>
  )
}

export default Post
