import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./JobDetails.module.css";

function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("name"));

  const handleLogout=()=>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className={Style.container}>
      <div className={Style.divCont}>
        <div className={Style.head} onClick={()=>navigate('/')}>
          <p>Jobfinder</p>
        </div>
        {user == null ? (
          <div style={{ display: "flex", gap: "15px" }}>
            <button className={Style.login} onClick={() => navigate("/login")}>
              Login
            </button>
            <button className={Style.reg} onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", gap: "15px" }}>
              <button
                className={Style.logout}
                onClick={handleLogout}
              >
                Logout
              </button>
              <p className={Style.txt}>Hello! Recruiter</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
