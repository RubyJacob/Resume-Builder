import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";


function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History </h1>
      <Link to = '/resume' className='float-end me-5 ' style={{marginTop:'-80px'}}>Back</Link>
       <Box component="section" className='container-fluid'>
        <div className="row">
         <div className="col-md-4">
          <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Review At: 29/10/2025</h6>
              <button className='btn text-danger fs-3'><MdDelete /></button>
            </div>
            <div className="border rounded p-3">
              <img className='image-fluid' width={'200px'} height={'200px'} src="https://tse2.mm.bing.net/th/id/OIP.bl8UYQDKX0OowjU7k0D06QHaJm?w=660&h=856&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>
          </Paper>

         </div>
        </div>
    </Box>
    </div>
  )
}

export default History