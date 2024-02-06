import React from "react";
import { searchSkills } from "./SearchData";
import Nav from "../../components/JobDetails/Nav";
import Style from "./HomePage.module.css";
import Search from "../../assets/icon/Vector.svg";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../api/job";
import Home from '../../components/Home/Home'

function HomePage() {
  const [Skills, setSkills] = useState([]);
  const [search, setsearch] = useState("");
  const [jobs,setJobs] = useState([])

  const handleSkills = (e) => {
    if (e.target.value === ' ') return;
    const newArr = Skills.filter((skill)=> skill === e.target.value )
    if(!newArr.length){
    setSkills([...Skills, e.target.value]);
    }
  };

  const remove = (selectedSkill)=>{
    const newArr = Skills.filter((skill)=> skill !== selectedSkill)
    setSkills([...newArr])
  }
  useEffect(() => {
    fetchJobDetails();
}, [Skills]);

  const fetchJobDetails = async()=>{
    const payload ={
      skills: Skills?.join(','),
      position: search?.trim(),
    }
    const jobList = await getAllJobs({...payload})
    setJobs(jobList.jobList)
  }

  const handleKeyDown=(e)=>{
    if(!search?.trim()){
      return
    }

    if(e.keyCode === 13)
    {
      fetchJobDetails();
    }
  }
  const handleClear=()=>{
    setSkills([])
  }
  return (
    <div className={Style.homeContainer}>
      <Nav />
      <div className={Style.searchDiv}>
        <br />
        <br />

        <div className={Style.search}>
          <button type="submit">
            <img src={Search} alt="search" />
          </button>
          <input
            type="search"
            placeholder=" Type any job title"
            className={Style.input}
            value={search}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <div className={Style.selectDiv}>
          <select name="remote" onChange={handleSkills}>
            <option value=" ">Skills</option>
            {searchSkills.map((skill) => (
              <option value={skill} key={skill}>
                {skill}
              </option>
            ))}
          </select>
          <div style={{display:'flex',gap:'15px'}}>
          {Skills.map((skill)=>(<div className={Style.skill}><p>{skill}</p><button onClick={()=>remove(skill)} className={Style.Xbtn}>X</button></div>))}
          </div>
          </div>
          <button onClick={handleClear} className={Style.clear}>clear</button>
        </div>
      </div>
      { jobs.length !== 0?(
        jobs.map((job)=>(
          <Home key={job._id} job={job}/>
        ))): <h1 style={{textAlign:'center',marginTop:'80px'}}>Loading...</h1>
      }
    </div>



  );
}

export default HomePage;
