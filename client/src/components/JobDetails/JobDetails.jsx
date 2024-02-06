import React, { useEffect, useState } from "react";
import moment from 'moment'
import Nav from "./Nav";
import { getJobDetails } from "../../api/job";
import { useParams, useNavigate } from "react-router-dom";
import Style from "./JobDetails.module.css";
import money from '../../assets/icon/money.png'
import calender from '../../assets/icon/calender.png'

function JobDetails() {
  const [data, setData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const id = useParams().id;
  useEffect(() => {
     fetchJobData();
  }, []);

  const fetchJobData = async () => {
    const responce = await getJobDetails(id);
    setData(responce);
  };

  return (
    <div className={Style.main}>
      <Nav />
      { data?
      ( <><div className={Style.headContainer}>
        <p className={Style.headText} style={{ textAlign: "center" }}>
          { data?.position + " "+ data?.type+" job/internship at "+    data?.companyName}
        </p>
      </div>
      <div className={Style.container2}>
        <div className={Style.cont1}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <p>{moment(data?.postedTime).fromNow() +" - "+data?.type}</p>
            {isLoggedIn ? (
              <p>
                <img src={data.logo} alt="logo" />
                {data.companyName}
              </p>
            ) : (
              <> </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap:'570px'
            }}
          >
            <h1>{data?.position}</h1>{" "}
            <button 
              onClick={() => {
                navigate("/job-post", {
                  state: {
                    id: id,
                    data: data,
                    edit: true,
                  },
                });
              }}
            >
              Edit Job
            </button>
          </div>
          <p>{data?.jobLocation}</p>
          <br /><br />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "40px",
            }}
          >
            <div>
              <p className={Style.ps}>
                <img src={money} alt="$" style={{height:'17px'}} /> Stipend
              </p>
              <p>Rs {data?.salary}/month</p>
            </div>
            <div>
              <p className={Style.ps}>
                <img src={calender} alt="time" style={{height:'17px'}} /> Duration
              </p>
              <p>{"6 Months"}</p>
            </div>
          </div>
        </div>
        <br />
        <div className={Style.cont2}>
          <h2>About company</h2>
          <p>{data?.about}</p>
        </div>

        <div className={Style.cont3}>
          <h2>About the job/internship</h2>
          <p>{data?.jobDescription}</p>
        </div>

        <div className={Style.cont4}>
          <h2>Skill(s) required</h2>
          <br />
          <p>{data?.skills?.map((skill)=>(<div><p>{skill}</p></div>))}</p>
        </div>

        <div className={Style.cont5}>
          <h2>Additional Information</h2>
          <p>{data?.info}</p>
        </div>
      </div> </> ): <> <h1>Job Not Found</h1>
      </>}
    </div>
  );
}

export default JobDetails;
