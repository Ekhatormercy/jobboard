import Header from "../Header/Header"
import jobman from "../../assets/jobman.jpg"
import employers from "../../assets/employers.png"
import "./Firstsup.css"
import { useNavigate } from "react-router-dom"
const Firstsup = () => {

    const Nav = useNavigate()
    const handlejobseeker = () => {
        Nav("/signUpJobSeeker")
    }
    // const handleemployer = () => {
    //     Nav("/signup/asemployer")
    // }
    const handlelogin = () => {
        Nav("/login")
    }
    return (
        <>
            {/* <Header /> */}
            <div className="firstsignup">
                <div className="siwrap">
                    <div className="h1wrp">
                        <h1>SignUp on JOBFINDER</h1>
                    </div>

                    <div className="boxholder">
                        <div className="boxx1">
                            <div className="imgebox">
                                <img src={jobman} alt="" />
                            </div>
                            <h1>Job Seekers</h1>
                            <p>Apply for exclusive jobs on JOBFINDER. Be found by <br /> employers. Build your CV free with our CV <br /> Builder. Download your CV.</p>

                            <button onClick={handlejobseeker } className="signupas">Signup Here</button>

                        </div>
                        {/* <div className="boxx1">
                            <div className="imgebox">
                                <img src={employers} alt="" />
                            </div>
                            <h1>Employers</h1>
                            <p>Hire the best candidates for your open positions <br /> on JOBFINDER. Register, post jobs and search <br /> exclusive candidate profiles</p>

                            <button onClick={handleemployer} className="signupa">Signup as Employer</button>

                        </div> */}

                    </div>
                </div>
                <p className="ptag">If you have an Account already; <span onClick={handlelogin}>Login Here</span></p>
            </div>
        </>
    )
}
export default Firstsup