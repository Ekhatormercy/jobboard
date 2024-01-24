import { useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import "./Login.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login =()=>{

 

  const Nav =useNavigate()

  const sign=()=>{
    Nav("/signup")
  }
  const [showPassword, setShowPassword] = useState(false)
 
  const [loading, setLoading] =useState(false)

  const handleShowPassword = () => {
    console.log("object");
    setShowPassword(!showPassword)
}



const schema = yup.object(). shape({
  email: yup.string().email().required("Your email is required"),
  password: yup.string().min(8).max(20).required("password must be a minimum of 8 characters")

})

const { register, 
  handleSubmit, 
  formState: { errors },
} = useForm({
   resolver: yupResolver(schema),
   });

   const onSubmit = async (data) =>{
    try {
      const res = await axios.post(
           "https://jobbboardapplication.onrender.com/api/v1/login",
           data,
        );
        console.log(res)
        Nav("/home")
        setLoading(false)
        const {token} = res.data
        localStorage.setItem("user", JSON.stringify({token}))
        axios.defaults.headers.common["Authorization"] = `Bearer${token}`
        console.log(token, "usertoken")

   }catch(err){
    console.log(err, 'err message')
      setLoading(false)
    
   }
   }
   
    return(
      <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header/>
      <div className="loginbox">
        <div className="loginwrap">
          <div className="lginwarp">
            <div className="emil">
              <p>Email</p>
              <input {...register("email")} type="text" placeholder="Enter Your Email"/>
              <p className="err">{errors.email?.message}</p>
            </div>
            <div className="pass">
              <p>Password</p>
              <div className="psshold">
              <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="Enter Your Password"/>
              <p className="err">{errors.password?.message}</p>
              <div className="eyediv1">
        {
        showPassword ? (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye' />) : (<AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword} />)
        }
              </div>
              </div>
            </div>
           <div className="btnhold">

           {loading ? (<p>Loading.........</p>) : (
             <button className="lgtnn">LOGIN</button>

                            )
           }
           </div>
          </div>
          <p>You don't have an Account <span onClick={sign}>Signup</span></p>
        </div>

      </div>
      </form>
      </>
    )
}
export default Login;