import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Create a Job- Winning Resume in Minutes</h1>
      <div style={{height:'60vh'}} className="row justify-content-center align-items-center">
        <div className="col-md-1"></div>
          <div className="col-md-4 border rounded shadow p-5 text-center">
          <IoDocumentTextOutline  className='text-primary fs-1 mb-3'/>
          <h4>Add your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 border rounded shadow p-5 text-center">
          <FaFileDownload className='text-danger fs-1 mb-3'/>
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
          </div>
        <div className="col-md-1"></div>
        <div className='text-center mb-5'>
          <Link to='/form' className='btn text-white ' style={{backgroundColor:'purple' }}>Let's Start</Link>
        </div>
      </div>
    </div>
  )
}

export default ResumeGenerator