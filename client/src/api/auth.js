import axios from 'axios'


const backendUrl = 'http://localhost:3000'

export const RegisterUser = async({name,email,mobile,password},navigate)=>{
    try {
        const url =`${backendUrl}/register`
        const responce = await axios.post(url, {name,email,mobile,password})
        if(responce){
            localStorage.setItem("token",responce.data.token)
            localStorage.setItem("name",responce.data.name)
        navigate('/')
        }
    } catch (error) {
        console.log(error)
    }
}

export const LoginUser = async({email,password},navigate)=>{
    try {
        const url =`${backendUrl}/login`
        const reqPayload = {email,password}
        const responce = await axios.post(url,reqPayload)
        if(responce){
            localStorage.setItem("token",responce.data.token)
            localStorage.setItem("name",responce.data.name)
        navigate('/')
        }
    } catch (error) {
        console.log(error)
    }
}
