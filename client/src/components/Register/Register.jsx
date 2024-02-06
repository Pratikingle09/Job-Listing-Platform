import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Style from './Register.module.css'
import { useNavigate } from 'react-router-dom'
import {RegisterUser} from '../../api/auth'

function Register() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [password,setPassword]=useState('')
  // console.log(name,email,mobile,password,check)

  const [data , setData]=useState({
    name,
    email,
    mobile,
    password
  })
  const navigate = useNavigate()

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  
  }


  const HandleSubmit =(e)=>{
    e.preventDefault()
    RegisterUser({...data},navigate)


  }
  return (
    <div className={Style.container}>
      <h1 className={Style.h1}>Create an account</h1>
      <h2 className={Style.h2}>Your personal job finder is here</h2>
      <form onSubmit={HandleSubmit}>
        <input type="text" name='name' placeholder='Name' className={Style.input} onChange={handleChange} />
        <input type="email" name='email' placeholder='Email' className={Style.input} onChange={handleChange}/>
        <input type="number" name='mobile' placeholder='Mobile' className={Style.input} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Password' className={Style.input} onChange={ handleChange}/>

        <input type="submit" value= "Create Account" className={Style.submit} />

        <input type="checkbox" className={Style.check} required/>
      </form>
     <span className={Style.statement}>By creating an account, I agree to our terms of use and privacy policy</span>
      <p className={Style.footer}>Already have an account?<span className={Style.underline}><Link to='/login' style={{color:'black'}}>Sign In</Link></span></p>
    </div>
  )
}

export default Register
