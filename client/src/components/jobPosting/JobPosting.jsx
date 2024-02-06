import React, { useState,useEffect } from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import Style from "./JobPosting.module.css";
import { jobPosting,updateJob } from "../../api/job";
import toast,{Toaster} from 'react-hot-toast'

function JobPosting() {

  
  const navigate = useNavigate()
  const location = useLocation().state           // we can send the data using useNavigate and can receve the same data in given route using useLocation
  const data = location.data
  const [isEdit,setIsEdit]=useState(false || location.edit)

  const [Type,setType]=useState('')
  const [RemoteOrOffice,setRemoteOrOffice]=useState('')
  const [jobData, setJobData] = useState({
    companyName:"" || data.companyName ,
    logo:'' || data.logo ,
    position:'' || data.position ,
    salary:'' || data.salary ,
    type:'' || data.type ,
    remoteOrOffice:'' || data.remoteOrOffice ,
    jobLocation:'' || data.jobLocation ,
    jobDescription:'' || data.jobDescription ,
    about:"" || data.about ,
    skills:'' || data.skills ,
    info:'' || data.info ,
  });
  
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
   
    
  };

  const handleOnSubmit=(e)=>{
    e.preventDefault()
    if(location.edit)
    {
      jobData.skills = jobData.skills.toString().split(',')
      const responce = updateJob(location.id,{...jobData})
  
       if(responce)
       {
           toast.promise(
               responce,
                {
                  loading: 'Updating...',
                  success: <b>Responce Updated!</b>,
                  error: <b>Could not update the details.</b>,
                }
              );
              navigate(`/job-details/${location.id}`)
       }
    }else{
    jobData.skills = jobData.skills.split(',')
    const responce = jobPosting({...jobData})

     if(responce)
     {
         toast.promise(
             responce,
              {
                loading: 'Saving...',
                success: <b>Responce saved!</b>,
                error: <b>Could not save.</b>,
              }
            );
            navigate('/')
     }
    }
}
  return (
    <div className={Style.jobPostingcontainer}>
      <h1 className={Style.h1}>{ isEdit?<> Edit</>:<>Add</> } job description</h1>
      <form >
        <label htmlFor="company-name">
          <p>Company Name</p>
          <input
            type="text"
            placeholder="Enter your company name here"
            id="company-name"
            value={jobData.companyName}
            name="companyName"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="logo">
          <span>Add logo URL</span>{" "}
          <input
            type="text"
            placeholder="Enter the link"
            id="logo"
            name="logo"
            value={jobData.logo}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="position">
          <span>Job position</span>{" "}
          <input
            type="text"
            placeholder="Enter job position"
            id="position"
            name="position"
            value={jobData.position}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="salary">
          <span>Monthly salary</span>{" "}
          <input
            type="text"
            placeholder="Enter Amount in rupees"
            id="salary"
            name="salary"
            value={jobData.salary}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="job-type">
          <span>Job Type</span>{" "}
          <select
            id="job-type"
            name="type"
            value={Type || jobData.type} onChange={(e)=>handleChange(e)}
            style={{
              marginRight: "20rem",
              width: "136px",
              height: "35px",
              textAlign: "center",
              color: "black",
              border: "2px solid #C2C2C2",
              borderRadius: "5px",
            }}
          >
            <option value="Select">
              Select
            </option>
            <option value="Full-Time" onClick={()=>setType('Full-Time')}>
              Full-Time
            </option>
            <option value="Part-Time" onClick={()=>setType('Part-Time')}  >
              Part-Time
            </option>
          </select>
        </label>
        <label htmlFor="remote-office">
          <span>Remote/office</span>{" "}
          <select
            id="remote-office"
            name="remoteOrOffice"
            value={Type || jobData.remoteOrOffice} onChange={(e)=>handleChange(e)}
            style={{
              marginRight: "20rem",
              width: "136px",
              height: "35px",
              textAlign: "center",
              color: "black",
              border: "2px solid #C2C2C2",
              borderRadius: "5px",
            }}
          >
            <option value="Select">
              Select
            </option>
            <option value="Remote" onClick={()=>setRemoteOrOffice('Remote')}>Remote</option>
            <option value="Office" onClick={()=>setRemoteOrOffice('Office')}>Office</option>
          </select>
        </label>
        <label htmlFor="location">
          <span>Location</span>{" "}
          <input
            type="text"
            placeholder="Enter Location"
            id="location"
            name="jobLocation"
            value={jobData.jobLocation}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="description">
          <span>Job Description</span>{" "}
          <input
            type="text"
            placeholder="Type the job description"
            id="description"
            name="jobDescription"
            value={jobData.jobDescription}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="about">
          <span>About Company</span>{" "}
          <input
            type="text"
            placeholder="Type about your company"
            id="about"
            name="about"
            value={jobData.about}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="skills">
          <span>Skills Required</span>{" "}
          <input
            type="text"
            placeholder="Enter the must have skills"
            id="skills"
            name="skills"
            value={jobData.skills}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="Information">
          <span>Information</span>{" "}
          <input
            type="text"
            placeholder="Enter the additional information"
            id="Information"
            name="info"
            value={jobData.info}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <div className={Style.btn}>
          <button className={Style.cancelBtn} onClick={()=>navigate('/')}>Cancel</button>
          <button className={Style.AddJob} type="button" onClick={handleOnSubmit}>{ isEdit?<> Edit</>:<>+ Add</> } Job</button>
        </div>
      </form>
    </div>
  );
}

export default JobPosting;
