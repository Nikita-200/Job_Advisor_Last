//import React, { useState } from 'react'
//import axios from 'axios'
//import './CompanyAddJob.css'
//const CompanyAddJob = () => {
//
//    const [inputs,setInputs]=useState({
//        company:"",
//        job:"",
//        description:"",
//        salary:"",
//      })
//      const [error,setError]= useState(null);
//    //   const navigate = useNavigate();
//
//      const handleSubmit= async (e) =>{
//        alert('Would you like to confirm your Ticket?')
//        e.preventDefault()
//
//        try{
//           await axios.post("/companyform/",inputs)
//        //    navigate("/thankyou")
//        }catch(err){
//          setError(err.response.data);
//        }
//      }
//
//      const handleChange = e=>{
//        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
//      }
//
//
//
//  return (
//    <>
//    <main className="job-container">
//    <form id="survey-form"  method="get">
//      <div className="name">
//        <label  id="name-label">Company Name</label>
//        <input type="text" className='inputbox' name="company" placeholder="Enter company name" onChange={handleChange} required/>
//      </div>
//      <div className="name">
//        <label  id="name-label">Job</label>
//        <input type="text" className='inputbox'  name="job" placeholder="Enter job" onChange={handleChange} required/>
//      </div>
//      <div className="name">
//        <label  id="name-label">Job Description</label>
//        <input type="text" className='inputbox'  name="description" placeholder="Enter job description" onChange={handleChange} required/>
//      </div>
//      <div className="name">
//        <label  id="name-label">Salary</label>
//        <input type="number" className='inputbox'  name="salary" placeholder="Enter salary" onChange={handleChange} required/>
//      </div>
//      {/* <div className="name">
//        <label  id="name-label">Salary</label>
//        <input type="number" className='inputbox'  name="name" placeholder="Enter salary" required/>
//      </div> */}
//
//
//      <div className="button">
//        <button className="formbtn" type="submit" id="submit" onClick={handleSubmit}>Submit</button>
//      </div>
//    </form>
// </main>
//    </>
//  )
//}
//
//export default CompanyAddJob
//




import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import './CompanyAddJob.css'
const AddJobs = () => {

    const [inputs,setInputs]=useState({
      company:"",
      job:"",
      description:"",
      location: "",
      salary:"",
    })
    const [error,setError]= useState(null);
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:5000/companyform/", inputs); // Update the URL with your Flask backend endpoint
            alert('Job details added successfully');
            navigate("/companyhome");
        } catch (err) {
            setError(err.response.data);
        }
    };

    const handleChange = e=>{
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }



return (
  <>
  <main className="job-container">
  <form id="survey-form"  method="get">
    <div className="name">
      <label  id="name-label">Company Name</label>
      <input style={{color:"black"}} type="text" className='inputbox' name="company" placeholder="Enter company name" onChange={handleChange} required/>
    </div>
    <div className="name">
      <label  id="name-label">Job</label>
      <input style={{color:"black"}} type="text" className='inputbox'  name="job" placeholder="Enter job" onChange={handleChange} required/>
    </div>
    <div className="name">
      <label  id="name-label">Job Description</label>
      <input style={{color:"black"}} type="text" className='inputbox'  name="description" placeholder="Enter job description" onChange={handleChange} required/>
    </div>
    <div className="name">
      <label  id="name-label">Qualification</label>
      <input style={{color:"black"}} type="text" className='inputbox'  name="qualification" placeholder="Enter minimum required qualification" onChange={handleChange} required/>
    </div>
    <div className="name">
      <label  id="name-label">Location</label>
      <input style={{color:"black"}} type="text" className='inputbox'  name="location" placeholder="Enter location" onChange={handleChange} required/>
    </div>
    <div className="name">
      <label  id="name-label">Salary</label>
      <input style={{color:"black"}} type="number" className='inputbox'  name="salary" placeholder="Enter salary" onChange={handleChange} required/>
    </div>

    {/* <div className="name">
      <label  id="name-label">Salary</label>
      <input type="number" className='inputbox'  name="name" placeholder="Enter salary" required/>
    </div> */}


    <div className="button">
      <button className="formbtn" type="submit" id="submit" onClick={handleSubmit}>Submit</button>
    </div>
  </form>
</main>
  </>
)

}

export default AddJobs