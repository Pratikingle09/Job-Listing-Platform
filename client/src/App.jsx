import {Route,BrowserRouter,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


import './App.css'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/loginPage/LoginPage'
import HomePage from './pages/homePage/HomePage'
import JobPostPage from './pages/jobPostPage/JobPostPage'
import JobDetailsPage from './pages/jobDetailsPage/JobDetailsPage'

function App() {


  return (
    <>
    <div><Toaster/></div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/job-post' element={<JobPostPage/>}/>
      <Route path='/job-details/:id' element={<JobDetailsPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
