import React from "react";
import Style from "./Home.module.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
import R from "../../assets/icon/r.png";
import P from "../../assets/icon/p.png";
import ind from "../../assets/icon/ind.svg";

function Home({ job }) {
  const [Job, setJob] = useState(job);
  const [logo,setLogo]=useState(Job.logo)
  return (
    <div className={Style.Hcontainer}>
      <div className={Style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div style={{display:'flex', justifyContent:'space-between',gap:'270px'}}>
        <div>
          <h2 className={Style.h2}>{Job?.position}</h2>
          <div style={{ display: "flex", gap: "30px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                style={{ width: "21px", height: "14px", marginTop: "11px" }}
                src={P}
                alt=""
              />
              <p>11-50</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                style={{ width: "10px", height: "14px", marginTop: "11px" }}
                src={R}
                alt=""
              />
              <p>{Job.salary}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={ind} alt="" />
              <p>{Job.jobLocation}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <p style={{ color: "#ED5353" }}>{Job.remoteOrOffice}</p>
            <p style={{ color: "#ED5353" }}>{Job.type}</p>
          </div>
        </div>
        <div>
          <div className={Style.tags}>
            {
              Job.skills.map((skill)=>(<p>{skill}</p>))
            }
          </div>
          <Link to={`/job-details/${Job._id}`}>
          <button className={Style.btn}>View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
