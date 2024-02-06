import React from "react";
import Register from "../../components/Register/Register";
import image from "../../assets/images/image 466.png";

function RegisterPage() {
  return (
    <>
      <div style={{display:'flex'}}>
        <Register />

        <img
          src={image}
          style={{ maxHeight: "100vh", width: "50vw" }}
          alt="image"
        />
      </div>
    </>
  );
}

export default RegisterPage;
