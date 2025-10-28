import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
<section style={{width:'100%',height:'100vh',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='container-fluid row align-items-center'>
   <div className="row">
   <div className="col-md-4"></div>
   <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
      <h3>Designed to get hired.
        Your skills, your story, your next job - all in one.
      </h3>
    <Link to='/resume' className='btn text-white ' style={{backgroundColor:'purple' }}>Make Your Resume</Link>
    </div>
    <div className="col-md-4"></div>
    </div>
  </section>

  <section className='mx-5 p-5'>
     <h1 className='text-center'>Tools</h1>
    
     <div className="row align-items-center">
      <div className="col-md-6">
        <div className='my-3'>
          <h2>Resume</h2>
          <p className='fs-4'>Create unlimited new resumes and easily edit them afterwards.</p>
        </div>
        <div className='my-3'>
          <h2>Cover Letters</h2>
          <p  className='fs-4'>Easily write professional cover letters.</p>
        </div>
        <div className='my-3'>
          <h2>Jobs</h2>
          <p  className='fs-4'>Automatically receive new and relevant job postings.</p>
        </div>
        <div className='my-3'>
          <h2>Applications</h2>
          <p  className='fs-4'>Effortlessly manage and track your job applications in an organized manner.</p>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
      </div>
     </div>
  </section>

  <section style={{height:'500px',width:'100%',backgroundImage:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
  </section>

  <section className='m-5'>
    <h1 className='text-center'>Testimonial</h1>
    <div className="row align-items-center">
      <div className="col-md-5 my-5">
        <h3 className='my-5'>Trusted by professionals worldwide.</h3>
        <p className='fs-4' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create resumes — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
        <p className='fs-4' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
        <p className='fs-4' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a resume that truly stands out.</p>
      </div>
       <div className="col-md-1"></div> 
      <div className="col-md-6">
        <div className="row">
        <div className="col-3">
          <img className='w-100' src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/shutterstock_178708364.jpg?itok=zWxBBNMi" alt="person" />
        </div>
        <div className="col-3">
          <img className='w-100' src="https://www.shutterstock.com/image-photo/portrait-casual-smiling-caucasian-male-600nw-1105355777.jpg" alt="person" />
        </div>
         <div className="col-3">
          <img className='w-100' src="https://thumbs.dreamstime.com/b/portrait-gorgeous-young-man-outdoors-outside-gay-crossed-arms-posing-forest-52081276.jpg" alt="person" />
        </div>
         <div className="col-3">
          <img className='w-100' src="https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=" alt="person" />
        </div>
        </div>
        <div className="row my-3">
        <div className="col-3">
          <img className='w-100' src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=" alt="person" />
        </div>
        <div className="col-3">
          <img className='w-100' src="https://media.istockphoto.com/id/1311655328/photo/im-the-best-asset-in-my-business.jpg?s=612x612&w=0&k=20&c=ebkVt_iY6rRjXvyx2CESPC8EtcWrv0nYt_y4IdKmN3M=" alt="person" />
        </div>
         <div className="col-3">
          <img className='w-100' src="https://media.istockphoto.com/id/1279125903/photo/head-and-shoulders-portrait-of-smiling-mature-businesswoman-working-in-modern-office.jpg?s=612x612&w=0&k=20&c=cjnbjqZqr0W_i-IHWnkgS67oSLeFjv6lo_LEwgfSsqw=" alt="person" />
        </div>
         <div className="col-3">
          <img className='w-100' src="https://t3.ftcdn.net/jpg/06/50/56/80/360_F_650568058_q6KruAvlT4w7RahAGwIwgIY8ZjIkGAYg.jpg" alt="person" />
        </div>
        </div>
         <div className="row my-3">
        <div className="col-3">
          <img className='w-100' src="https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg" alt="person" />
        </div>
        <div className="col-3">
          <img className='w-100' src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-600nw-2040223583.jpg" alt="person" />
        </div>
         <div className="col-3">
          <img className='w-100' src="https://t3.ftcdn.net/jpg/06/50/75/98/360_F_650759832_vPKJLSiejiFMSzo6tLE465J9xMjpI2dq.jpg" alt="person" />
        </div>
         <div className="col-3">
          <img className='w-100' src="https://img.freepik.com/free-photo/happy-african-american-professional-manager-smiling-looking-camera-headshot-portrait_1163-5134.jpg" alt="person" />
        </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </section>
  </div>
  )
}

export default LandingPage