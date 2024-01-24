import "./Signup.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SpinnerCircular } from "spinners-react";
import { yupResolver } from "@hookform/resolvers/yup";
// import { schema } from "yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPssword] = useState(false);
  const nav =useNavigate()

  const handleShowPassword = () => {
    setShowPssword(!showPassword);
  };

//   const handleSignUp = () => {};

  const schema = yup.object().shape({
    firstName: yup.string().required("Your firstname is required"),
    lastName: yup.string().required("lastname is required"),
    userName: yup.string().required("username is required"),
    email: yup.string().email().required("email is required"),
    phoneNumber: yup
      .string()
      .matches(/^0\d{10}$/, " Must be of the format 080")
      .required("Phonenumber is required"),
    password: yup
      .string()
      //   .matches( '^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$')
      .typeError("passwww")
      .required(
        "Password must be at least 8 characters long, and one of uppercase, lowercase, number and special characters"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        " https://echo-sphere-blog.onrender.com/api/v1/signup",
        data
      );
      const userInformation =res.data.data
      localStorage.setItem("userInformation", JSON.stringify({id:userInformation._id, name:userInformation.userName, email:userInformation.email}))
      nav("/login")
      console.log(userInformation)
      setLoading(false);
    } catch (err) {
      console.log(err, "err message");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="MainBody">
          <div className="options">
            <div className="optwrap">
              <div className="optimg">
                <img src="src/assets/EchoSphere.png" alt="" />
              </div>
              <h1>Welcome to Echosphere</h1>
              <h3>Create an account to unlock these benefits</h3>

              <hr
                style={{ backgroundColor: "green", color: "red", width: "60%" }}
              />
              <div className="contt">
                <ul className="ull">
                  <li className="lit">
                    Comment on articles and express yourself
                  </li>
                  <li className="lit">Manage your Newsletters</li>
                  <li className="lit">Access Privacy Setings</li>
                  <li className="lit">
                    Browse Without the distract of pop-up ads
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="SignUpContentDownWrap">
            <div className="SignUpContentDownInitials">
              <h1>Hello There</h1>
              <p>Create an account to get started</p>
            </div>
            <div className="SignUpContentDownForm">
              <div className="SignUpContentDownFormNames">
                <div className="SignUpContentDownFormFName">
                  <div className="SignUpContentDownFormFNameLabels">
                    <label htmlFor="">First Name</label>
                  </div>
                  <div className="SignUpContentDownFormFNameInputs">
                    <input
                      type="text"
                      placeholder="Input First Name"
                      {...register("firstName")}
                    />
                  </div>
                  <p style={{ color: "red" }}> {errors.firstName?.message}</p>
                </div>
                <div className="SignUpContentDownFormLName">
                  <div className="SignUpContentDownFormLNameLabels">
                    <label htmlFor="">Last Name</label>
                  </div>
                  <div className="SignUpContentDownFormLNameInputs">
                    <input
                      type="text"
                      placeholder="Input Last Name"
                      {...register("lastName")}
                    />
                  </div>
                  <p style={{ color: "red" }}> {errors.lastName?.message}</p>
                </div>
              </div>
              <div className="SignUpContentDownFormMail">
                <div className="SignUpContentDownFormMailLabels">
                  <label htmlFor="">Username</label>
                </div>
                <div className="SignUpContentDownFormMailInputs">
                  <input
                    type="text"
                    placeholder="Input Username"
                    {...register("userName")}
                  />
                </div>
                <p style={{ color: "red" }}> {errors.userName?.message}</p>
              </div>
              <div className="SignUpContentDownFormMail">
                <div className="SignUpContentDownFormMailLabels">
                  <label htmlFor="">Email Address</label>
                </div>
                <div className="SignUpContentDownFormMailInputs">
                  <input
                    type="email"
                    placeholder="Input Email"
                    {...register("email")}
                  />
                </div>
                <p style={{ color: "red" }}> {errors.email?.message}</p>
              </div>
              <div className="SignUpContentDownFormPhone">
                <div className="SignUpContentDownFormPhoneLabels">
                  <label htmlFor="">Phone Number</label>
                </div>
                <div className="SignUpContentDownFormPhoneInputs">
                  <input
                    type="text"
                    {...register("phoneNumber")}
                    placeholder="Input Number"
                  />
                </div>
                <p style={{ color: "red" }}> {errors.phoneNumber?.message}</p>
              </div>
              <div className="SignUpContentDownFormPwd">
                <div className="SignUpContentDownFormPwdLabels">
                  <label htmlFor="">Password</label>
                </div>
                <div className="SignUpContentDownFormPwdInputs">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Input Password"
                    {...register("password")}
                  />
                  <div className="SignUpContentDownFormPwdEyes">
                    {showPassword ? (
                      <AiOutlineEye
                        onClick={handleShowPassword}
                        className="AiOutlineEye"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="AiOutlineEyeInvisible"
                        onClick={handleShowPassword}
                      />
                    )}
                  </div>
                </div>
                <p style={{ color: "red" }}> {errors.password?.message}</p>
              </div>
            </div>
            <div className="SignUpContentDownBtn">
              <button >
                {loading ? (
                  <SpinnerCircular size={30} color="white" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

