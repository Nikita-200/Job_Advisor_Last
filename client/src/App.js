import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home";
import JobSeekerLogin from './pages/JobSeekerLogin/JobSeekerLogin';
import CompanyLogin from './pages/CompanyLogin/CompanyLogin';
import SignUp from './pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import RecommendedJobs from './pages/RecommendedJobs/RecommendedJobs';
import ForgetPassword from './pages/JobSeekerLogin/ForgetPassword';
import CompanyHome from './pages/CompanyHome/CompanyHome';
import CompanyAddJob from './pages/CompanyAddJob/CompanyAddJob';
import Video from './pages/Video/Video'
import ApplyJob from './pages/ApplyJob/ApplyJob'
import JobSeekerProfile from './pages/JobSeekerProfile/JobSeekerProfile'
import ViewApplicants from './pages/ViewApplicants/ViewApplicants'
import ScheduleInterview from './pages/ScheduleInterview/ScheduleInterview'
import ResumeBuilder from './pages/ResumeBuilder/ResumeBuilder'
import Admin from './pages/Admin/Admin'
import ViewCompanyForAdmin from './pages/ViewCompanyForAdmin/ViewCompanyForAdmin'
import ViewJobSeekerForAdmin from './pages/ViewJobSeekerForAdmin/ViewJobSeekerForAdmin'
import Fer from './pages/Fer/Fer'

function Layout() {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer/>

    </>


  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/jobs",
        element:<RecommendedJobs/>
      },
      {
        path:"/companyform",
        element:<CompanyAddJob/>
      },
      {
        path:"/resumebuilder",
        element:<ResumeBuilder/>
      },
        {
        path:"/video",
        element:<Video/>
      },
      {
        path:"/applyjob/:jobId",
        element:<ApplyJob/>
      },
       {
        path:"/jobseekerprofile",
        element:<JobSeekerProfile/>
      },
       {
        path:"/viewapplicants/:jobId",
        element:<ViewApplicants/>
      },
      {
        path:"/scheduleinterview/:applicantId/:jobId",
        element:<ScheduleInterview/>
      }

    
   ],
   
  },
  {
    path:"/login",
    element:<CompanyLogin/>
  },
  {
    path:"/JobSeekerlogin",
    element:<JobSeekerLogin/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  
  {
    path:"/forgetpassword",
    element:<ForgetPassword/>
  },
  {
    path:"/companyhome",
    element:<CompanyHome/>
  },
   {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/viewcompanyforadmin/:companyId",
    element:<ViewCompanyForAdmin/>
  },
  {
    path:"/viewjobseekerforadmin/:jobSeekerId",
    element:<ViewJobSeekerForAdmin/>
  }

  
]);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    {/* <Home/> */}
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    </>
  );
}

export default App;
