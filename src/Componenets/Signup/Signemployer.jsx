// import "./Signjobseeker.css"
import "./Signemployer.css"
import { useNavigate } from "react-router-dom"
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { LuCheckCircle } from "react-icons/lu";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signjobseeker = () => {
    const nav=useNavigate()

    // const handlejobseek =()=>{
    //     nav("/signup/jobseeker")
    // }
    const handlelogin =()=>{
        nav("/login")
    }

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
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
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {

        try {
            setLoading(true)
            const res = await axios.post(
                " https://jobboardapplication.onrender.com/api/v1/signUpEmployer ", data
            )
            console.log(res)
            toast.success("welcome poorman we dey find job")
            setTimeout(() => {
                nav("/login")
            }, 2000)
            setLoading(false)
        } catch (err) {
            if (err.response.data.message) {
                toast.error(err.response.data.message)
            }

        }

    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="jobseekerboxx1">
                <div className="jobseekwrap1">
                    <div className="seekleft1">
                        <h1>Create an Employer account on <br /> JobFinder</h1>
                        <div className="jobdiscrip">
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>Get the right candidates for your open positions</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>We know your time is valuable, use our premium  <br /> CV search to hunt the right candidates</p>
                            </div>
                            <div className="chechold">
                                <LuCheckCircle className="checkic" />
                                <p>We give you value for your time and money</p>
                            </div>
                           
                        </div>
                        <div className="downpp">
                            <p>Not a Employer; </p>
                            {/* <span onClick={handlejobseek}>Sign Up as an Jobseeker</span> */}
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

                            <p>You Already Have an Account;  <span onClick={handlelogin}>Login</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}
export default Signjobseeker