import React, { useContext } from 'react'
import { AppContext } from '../Context/Appcontext'
import Spinner from "./Spinner"

function Blogs() {


  const { posts, loading } = useContext(AppContext)

  

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        (posts?.length === 0) ? <h1>No posts are there</h1> : (
          posts.map((post) => (
            <div key={post.id}>
              <h2 className='title'>{post.title}</h2>
              <div style={{display:"flex", gap:"20px"}}>
              <h4 className='author'>{post.author}</h4>
              <h4 className='category'>{post.category}</h4>
              </div>
              <p>{post.content}</p>
            </div>
          ))
        )
      )}
    </div>
  );
}

export default Blogs



