import "./Signjobseeker.css"
import { useNavigate } from "react-router-dom"
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { LuCheckCircle } from "react-icons/lu";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
// import {spinnerCircular} from "spinner- react";
import axios from "axios";
import { toast } from "react-toastify";

const Signjobseeker = () => {
    const nav=useNavigate()

    const handleemployer=()=>{
        nav("/signup/asemployer")
    }
    const handlelogin=()=>{
        nav("/login")
    }

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [roles, setRoles] = useState("")
    // const [jobSeeker, setJobSeeker] =
    console.log(roles)
    const handleShowPassword = () => {
        console.log("object");
        setShowPassword(!showPassword)
    }

    const schema = yup.object().shape({
        firstName: yup.string().required("Your firstName is Required"),
        lastName: yup.string().required("Your lastName is Required"),
        email: yup.string().email().required("Your email is Required"),
        phoneNumber: yup.string().matches(/^\d{11}$/, "phoneNumber must be 11 digits").typeError("phoneNumber must be a number").required("PhoneNumber is required "),
        password: yup.string().min(8).max(20).required("Password must be a minimum of 8 Characters"),
        role: yup.string().required("")
    })
    const { register, 
        handleSubmit, 
        formState: { errors },
     } = useForm({
         resolver: yupResolver(schema),
         });

    const onSubmit = async (data) => {

        try {
            setLoading(true);
            data.roles=[roles]
            const res = await axios.post(
                "https://jobboardapplication.onrender.com/api/v1/signUp",
                 data, 
                //  {roles:[ roles]},
                //  { headers: { roles: [roles] } }
            );
            console.log(res)
           const userInformation =res.data.data
           localStorage.setItem("userInformation", JSON.stringify({id:userInformation._id, name:userInformation.userName, email:userInformation.email}))
          
                nav("/login")
          console.log(userInformation)
            setLoading(false)
        } catch (err) {
            console.log(err, "err message")
            setLoading(false)   
            

        }

    };

return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="jobseekerboxx">
                <div className="jobseekwrap">
                    <div className="seekleft">
                        <h1>Jobseeker! Create an account on <br /> JOBFINDER</h1>
                        <div className="jobdiscrip">
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p> Apply for exclusive jobs on JobFinder</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>Download your CV in several formats</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>Save jobs for future reference</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>Enjoy priority access to some resources</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>We go through our database when we have CV <br /> requests</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>We push your CVs to employers daily 100% FREE!</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>ALL FOR FREE (both now and in future)!</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="seekright">
                        <div className="seekwrpr">
                            <h2>Signup using Form</h2>
                            <div className="inpupth">
                                <div className="inpunln">
                                    <div className="namein">
                                        <div className="flex">
                                            <p>First Name</p>

                                        </div>
                                        <input type="text"
                                            {...register("firstName")}/>
                                        <p className="err">{errors.firstName?.message}</p>
                                    </div>
                                    <div className="namein">
                                        <div className="flex">
                                            <p>Last Name</p>

                                        </div>
                                        <input type="text"
                                            {...register("lastName")}/>
                                        <p className="err">{errors.lastName?.message}</p>
                                    </div>
                                </div>
                                <div className="inpunln">
                                    <div className="namein">
                                        <div className="flex">
                                            <p>Email</p>

                                        </div>

                                        <input type="email"   {...register("email")}
                                        />
                                        <p className="err">{errors.email?.message}</p>
                                    </div>
                                    <div className="namein">
                                        <div className="flex">
                                            <p>Phone Number</p>

                                        </div>
                                        <input type="text"   {...register("phoneNumber")}
                                        />
                                        <p  className="err">{errors.phoneNumber?.message}</p>
                                    </div>
                                </div>
                               <p>role</p>
                                <select {...register("role")} onChange={(e)=> setRoles(e.target.value)} id="">
                                   
                                    <option value={"jobSeeker"}><p>jobSeeker</p></option>
                                    
                                    <option value={"employer"}><p>employer</p></option>
                                    
                                    </select>
                                <div className="inpunn">
                                    <div className="lnginn">
                                        <div className="flex">
                                            <p>Password</p>

                                        </div>

                                        <div className="inputii">
                                            <input type={showPassword ? "text" : "password"}
                                                {...register("password")}
                                                onChange={(e) => setPassword(e.target.value)} />

                                            <div className="eyediv">
                                                {
                                                    showPassword ? (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye' />) : (<AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword} />)
                                                }
                                            </div>

                                        </div>
                                        <p className="err">{errors.password?.message}</p>

                                    </div>
                                </div>
                            </div>
                            {loading ? (<p>Loading.........</p>) : (
                                <button className="getstartbtn">Get Started</button>

                            )
                            }

                            <p>You Already Have an Account;  <span onClick={ handlelogin}>Login</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}
export default Signjobseeker