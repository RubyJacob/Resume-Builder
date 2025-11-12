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
import html2canvas from 'html2canvas';




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
      const canvas = await html2canvas(preview,{scale:2,useCORS: true })
      console.log(canvas);
      //covert canvas to img
      const resumImg = canvas.toDataURL('image/png')
      const pdf = new jsPDF("p", "pt", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();  // ~595.28pt
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Canvas size (in px)
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;

  // Convert px → pt (1pt ≈ 1.333px at 96dpi)
  const pxToPt = 0.75;
  const imageWidthPt = imgWidth * pxToPt;
  const imageHeightPt = imgHeight * pxToPt;

  // Compute scale ratio so image fits inside PDF page
  const scale = Math.min(pdfWidth / imageWidthPt, pdfHeight / imageHeightPt);

  const renderWidth = imageWidthPt * scale;
  const renderHeight = imageHeightPt * scale;

  // Center horizontally (optional)
  const marginX = (pdfWidth - renderWidth) / 2;

  pdf.addImage(resumImg, "PNG", marginX, 0, renderWidth, renderHeight);
  pdf.save(`${resume.username}-resume.pdf`);
  

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
    <div>
      <div className="container my-5">
         <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6 col-12 ">
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
     </div>
  )
}

export default ViewResume