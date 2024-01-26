import "./Postjobs.css";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import Header from "../Header/Header";
import { useState } from "react";
import Dropdown from "../Header/Dropdown";
const Postjobs = () => {

    const [jobType, setJobType] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] =useState(false)

    console.log(jobType)

    const schema = yup.object(). shape({
        jobTitle: yup.string().required("* required"),
        jobDescription: yup.string().required("* required"),
        salary: yup.string().required("* required"),
        companyName: yup.string().required("* required"),
        companyAddress: yup.string().required("* required"),
        jobType: yup.string().required("")
       
      
      })
      const { register, 
        handleSubmit, 
        formState: { errors },
      } = useForm({
         resolver: yupResolver(schema),
         });


         const onSubmit = async (data) =>{
            try {
                setLoading(true);
                data.jobType=[jobType]
                console.log(data, "payload")
              const res = await axios.post(
                   "https://jobboardapplication.onrender.com/api/v1/postJobs",
                   data,
                
                );
                console.log(res)
                Nav("/home")
                setLoading(false)
           }catch(err){
            console.log(err, 'err message')
              setLoading(false)
            
           }
           }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
   
<Header show={show} setShow={setShow}/>
      {
   show === true? <Dropdown/> :null
     }
    <div className="postjobpage">
      <div className="pstwrap1">
        <div className="uppathd">
          <h1>Employment Details</h1>
        </div>
        <div className="inputwrap11">
          <div className="postinpu1">
            <h3>Job Title</h3>
            <input type="text"  {...register("jobTitle")}/>
            <p className="err1">{errors.jobTitle?.message}</p>
          </div>
          <div className="postinpu1">
            <h3>Job Description</h3>
            <input type="text"  {...register("jobDescription")}/>
            <p className="err1">{errors.jobDescription?.message}</p>
          </div>
          <div className="postinpu1">
            <h3>Salary</h3>
            <input type="text"  {...register("salary")}/>
            <p className="err1">{errors.salary?.message}</p>
          </div>
          <div className="postinpu1">
            <h3>Company Name</h3>
            <input type="text"  {...register("companyName")}/>
            <p className="err1">{errors.companyName?.message}</p>
          </div>
          <div className="postinpu1">
            <h3>Company Address</h3>
            <input type="text"  {...register("companyAddress")}/>
            <p className="err1">{errors.companyAddress?.message}</p>
          </div>
         <div className="selectdiv">
         <select  {...register("jobType")} onChange={(e)=> setJobType(e.target.value)} name="" id="selll">
          <option value={"remoteJobs"}><p>Remote Jobs</p></option>
          <option value={"hybridsJobs"}><p>Hybrid Jobs</p></option>
          <option value={"onSiteJobs"}><p>Onsite Jobs</p></option>
          </select>
          <button className="createbtn">Create</button>
         </div>
        </div>
      </div>
    </div>
   
    </form>
    </>
  );
};
export default Postjobs;
