import React from 'react'
import FetchedPosts from './Components/FetchedPosts'
import PostForm from './Components/PostForm'
import Posts from './Components/Posts'

function App() {
  return (
    <>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col'>
           <PostForm/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <h3>StatickPosts</h3>

            <Posts/>
          </div>
          <div className='col'>
            <h3>SagaPosts</h3>
            <FetchedPosts posts={[]}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

