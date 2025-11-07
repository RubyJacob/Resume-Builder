import React, { useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'




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

   const handleDownloadResume = async() =>{
    // create pdf
      const doc = new jsPDF();
      const preview = document.getElementById("preview")
      //screemshot of preview
      const canvas = await html2canvas(preview,{scale:2})
      console.log(canvas);
      //covert canvas to img
      const resumImg = canvas.toDataURL('image/png')
      console.log(resumImg);
      //add  screenshot to img
      const pageWidth = doc.internal.pageSize.getWidth()
     // const imgHeight = doc.internal.pageSize.getHeight()
     
     const imgWidth = pageWidth-5
     const imgHeight = canvas.height*imgWidth/canvas.width

      doc.addImage(resumImg,'PNG',0,0,imgWidth,imgHeight)
      //download pdf
      doc.save(`${resume.username}-resume.pdf`)
      //local tim and add

      const localTime = new Date()
      //console.log(localTime);
      const timestamp = `${localTime.toLocaleDateString()},${localTime.toLocaleTimeString()}`
      //console.log(timestamp);
      try{
         await addHistoryAPI({timestamp,resumImg})
      }
      catch(err){
         console.log(err);
         
      }
      
      
   }


  return (
    <>
      <div className="container my-5">
         <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12 ">
              <div className="d-flex align-items-center justify-content-center mt-3">
                  <button onClick={handleDownloadResume} className='btn text-primary fs-3'><FaFileDownload/></button>
                   <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                  <Link to={'/history'} className='btn text-primary fs-3'><FaHistory/></Link>
                  <Link to={'/resume'} className='btn text-success fs-3'><FaBackward/></Link>
              </div>
                <div id='preview'><Preview resumeDetails={resume} /></div>
            </div>
            <div className="col-md-2"></div>
         </div>
      </div>
     </>
  )
}

export default ViewResume