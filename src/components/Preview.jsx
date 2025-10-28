import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div  style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h4>Job Title</h4>
      <h6><span className='mx-2'>Location</span> | <span className='mx-2'>Email</span> |  <span>Phone</span> </h6>
      <p className='my-3'>
       <a href="" target='_blank'>GITHUB</a> |
       <a href="" target='_blank'>LINKEDIN</a> |
       <a href="" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam eligendi doloremque ab, fugit quidem, ipsam repudiandae nam, error pariatur reprehenderit voluptate nostrum dolores. Adipisci eveniet labore corrupti laudantium sunt.</p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>College</span> | <span className='mx-2'>University</span> |  <span>Passout Year</span> </p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Summary </Divider>
      <h5>Job / Internship</h5>
      <p><span className='mx-2'>company name</span> | <span className='mx-2'>company location</span> |  <span>duration</span> </p>
       <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3'>
      <Button variant="contained" className='m-1'>NODE JS</Button>
       </div>
      
      
      </div>



    
  )
}

export default Preview