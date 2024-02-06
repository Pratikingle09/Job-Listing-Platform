import axios from 'axios'

const backendUrl = 'http://localhost:3000'

export const getAllJobs = async({skills , position})=>{
    try {
        const url =`${backendUrl}/jobs/all?skills=${skills}&position=${position}`
        const responce = await axios.get(url)
        return responce.data

    } catch (error) {
        console.log(error)
    }
}

export const getJobDetails = async(jobId)=>{
    try {
        const url =`${backendUrl}/jobs/job-description/${jobId}`
        const responce = await axios.get(url)
        return responce.data.jobDetails
    } catch (error) {
        console.log(error)
    }
}

export const jobPosting = async(jobData) =>{
    try {
        const token = localStorage.getItem('token')
        // to send the token to api
         axios.defaults.headers.common['Authorization']=token;  // this will send the token to backend


        const url =`${backendUrl}/job/create`
        const responce = await axios.post(url,{...jobData})
        return responce
       
    } catch (error) {
        console.log(error)
    }
}
export const updateJob = async(jobId,jobData) =>{
    try {
        const token = localStorage.getItem('token')
        // to send the token to api
         axios.defaults.headers.common['Authorization']=token;  // this will send the token to backend


        const url =`${backendUrl}/jobs/edit/${jobId}`
        const responce = await axios.put(url,{...jobData})
        return responce
       
    } catch (error) {
        console.log(error)
    }
}