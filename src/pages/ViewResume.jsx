import React, { useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getResumeAPI } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit'




function ViewResume() {
   const {id} = useParams()
   console.log(id);
   const [resume,setResume]  = useState({})

   useEffect(()=>{
      getResumeDetails()
   },[])

   const getResumeDetails = async() =>{
      const result = await getResumeAPI(id)
      console.log(result);
      if(result.status == 200){
          setResume(result.data)
      }
   }


  return (
    <>
      <div className="container my-5">
         <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12 ">
              <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className='btn text-primary fs-3'><FaFileDownload/></button>
                   <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                  <Link to={'/history'} className='btn text-primary fs-3'><FaHistory/></Link>
                  <Link to={'/resume'} className='btn text-success fs-3'><FaBackward/></Link>
              </div>
                <Preview resumeDetails={resume} />
            </div>
            <div className="col-md-2"></div>
         </div>
      </div>
     </>
  )
}

export default ViewResume