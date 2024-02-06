import React from 'react'
import JobPosting from '../../components/jobPosting/JobPosting'
import jobimage from '../../assets/images/addJob.png'

function JobPostPage() {
  return (
    <div style={{display:'flex'}}>
      <JobPosting/>
      <img src={jobimage} alt="image" style={{ maxHeight: "100vh", width: "40vw" }} />
    </div>
  )
}

export default JobPostPage
