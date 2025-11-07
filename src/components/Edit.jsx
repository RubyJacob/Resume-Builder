import React, { useState,useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
import { updateResumeAPI } from '../services/allAPI';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

function Edit({resumeDetails,setResumeDetails}) {
  const[open,setOpen] = useState(false)
  const skillRef = useRef()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addSkill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert("The given skill already added, Please add another !!!")
    }
    else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      skillRef.current.value = ""
    }
  }
  const removeSkill = (skill) =>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item => item!= skill)})
  }

  const handleResumeUpdate = async () =>{
    const {id,username,jobTitle,location} = resumeDetails
        if(!username && !jobTitle && !location){
          alert("Please fill the form completely")
        }
        else{
          console.log("Api call");   
          try{
            const result =  await updateResumeAPI(id,resumeDetails)
            console.log(result);
            if(result.status == 200){
              alert('Resume updated successfully')
              handleClose()
            }     
          }   
          catch(error){
           console.log(error);
           
          }
        }
  } 
  

  return (<div>
    <button onClick={handleOpen} className='btn text-warning fs-2'><MdEditDocument/></button>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal data */}
             <div>
                <h2>Personal Details</h2>
                    <div className="row p-3">
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                    </div>
            </div>
             {/* contact details */}
             <div>
                             <h2>Contact Details</h2>
                             <div className="row p-3">
                               <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                               <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-phone" label="Phone Number" variant="standard" />
                               <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                               <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                               <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                             </div>
             </div>
              {/* educational details */}
               <div>
                              <h2>Educational Details</h2>
                               <div className="row p-3">
                                <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                                <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-clg" label="College Name" variant="standard" />
                                <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-uni" label="University" variant="standard" />
                                <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                              </div>
                </div>
                {/* work experience */}
                 <div>
                                <h2>Professional Details</h2>
                                <div className="row p-3">
                                  <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-joi" label="Job or Internship" variant="standard" />
                                  <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                                  <TextField value={resumeDetails.clocation} onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-cmploc" label="Company Location" variant="standard" />
                                  <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                                </div>
                </div>
                {/* skills */}
                <div>
                <h2>Skills</h2>
                <div className='d-flex align-items-center justify-content-between p-3'>
                   <input ref={skillRef} type="text" className="form-control" placeholder='Add Skills'/>
                    <Button onClick={()=>{addSkill(skillRef.current.value)}} variant='text'>ADD</Button>
                </div>
                <h5>Added Skills:</h5>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                {
                  resumeDetails.userSkills?.length > 0 ?
                  resumeDetails.userSkills?.map((skill,index)=>(
                     <Button key={index} variant="contained" className='m-1'>{skill}<FaXmark onClick={()=> {removeSkill(skill)}} className='ms-2'/></Button>))
                  :
                  <p className='fw-bolder'>No skills are added yet</p>
                }
                </div>
               </div>
                 {/* summary */}
                  <div>
                                 <h2>Summary</h2>
                                 <div className="p-3 row">
                                    <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={4} defaultValue={'Enthusiastic MERN Stack Developer skilled in building dynamic, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in front-end and back-end development, API integration, and database management. Passionate about clean code, problem-solving, and continuous learning in modern web technologies.'}/>
                                 </div>
                 </div>
                  {/* button for update */}
                  <div className="text-center">
                    <button onClick={handleResumeUpdate} className="btn btn-warning text-light">Update</button>
                  </div>


          </Box>
        </Box>
      </Modal>
      </div>
  )
}

export default Edit