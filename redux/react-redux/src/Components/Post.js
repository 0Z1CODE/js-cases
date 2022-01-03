import React  from 'react';


function Post({post, id}) {
  return (
    <>
     <div className='card'>
       <div className='card-body'>
         <h5 className='card-titlr'>
          {post?.title}
          <button>Delete</button>
         </h5>
       </div>
     </div>
    </>
  )
}

export default Post
