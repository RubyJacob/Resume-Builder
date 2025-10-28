import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='fs-1 d-flex align-items-center justify-content-center flex-column'>
      <img  src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" alt="" />
      <h1>404!</h1>
      <h2>Page not Found</h2>
     <Link to= '/' className='btn btn-success'>Go to Home</Link>
     
    </div>
  )
}

export default Pnf