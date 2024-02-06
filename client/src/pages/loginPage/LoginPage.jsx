import React from 'react'
import Login from '../../components/Login/Login'
import image from '../../assets/images/image 466.png'

function LoginPage() {
  return (
    <>
    <div className="reg-container" style={{display:'flex'}}>
      <Login/>
      <img src={image} style={{ maxHeight: "100vh", width: "50vw" }} alt="image" />
    </div>      
    </>
  )
}

export default LoginPage
