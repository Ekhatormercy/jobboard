// import {useNavigate} from "react"
import { useNavigate } from "react-router-dom"
import "./Firstpage.css"
const Splashscreen = () => {

    const Nav = useNavigate()

    const handsign =()=>{
        Nav("/signup")
    }
    const handlogin =()=>{
        Nav("/login")
    }
    return (
        <div className="splashscreen">
            <div className="splashleft">
                <div className="sleftwrap">
                    <h1>WELCOME TO JOBFINDER</h1>
                    <h1>Find Your<span> Dream  Job</span><br />
                        With Your Intrest and Skills</h1>

                        <div className="scrnbtn">
                            <button onClick={handsign} className="signbtn">Sign Up</button>
                            <button onClick={handlogin} className="logbtn">Login</button>
                        </div>
                </div>
                
            </div>
            <div className="splashright">
                {/* <img src="https://pilbox.themuse.com/image.png?filter=antialias&h=350&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Femail-to-send-when-starting-new-job.png&w=700" alt="" /> */}
            </div>
        </div>
    )
}
export default Splashscreen