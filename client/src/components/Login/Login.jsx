import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Style from '../Register/Register.module.css'
import { useNavigate } from 'react-router-dom'
import {LoginUser} from '../../api/auth'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // console.log(name,email,mobile,password,check)
    const navigate = useNavigate()
  
    const HandleSubmit =(e)=>{
        e.preventDefault()
        LoginUser({email,password},navigate)
      }
    return (
      <div className={Style.container}>
        <h1 className={Style.h1}>Already have an account?</h1>
        <h2 className={Style.h2}>Your personal job finder is here</h2>
        <form onSubmit={HandleSubmit} >
          <input type="email" placeholder='Email' className={Style.input} onChange={ (e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' className={Style.input} onChange={ (e)=>setPassword(e.target.value)}/>
  
          <input type="submit"  className={Style.submit}  value= "Sign in" />
        </form>
        <p className={Style.footer}>Don’t have an account?<Link to='/register' style={{color:'black'}}>Sign Up</Link> </p>
      </div>
    )
}

export default Login
