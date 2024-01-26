import "./Header.css"
import { FcMenu } from 'react-icons/fc';
import { GiCancel } from 'react-icons/gi';
import { IoIosArrowDown } from "react-icons/io";
import joblogo from "../../assets/joblogo.png"
import { useNavigate } from "react-router-dom";
const Header = ({show, setShow}) => {

    const Nav =useNavigate()

    const handsign=()=>{
        Nav("/signup")
    }
    const handlogin=()=>{
        Nav("/login")
    }
    const handlejob=()=>{
        Nav("/job")
    }
    const handlepostjobs=()=>{
        Nav("/postjobs")
    }
    const handlehome=()=>{
        Nav("/home")
    }

    
    const handletoggle =()=>{
    const toggle = document.getElementById("toggle")
    const homepage = document.getElementById("Homepagebox")
   

        toggle.classList.toggle("actives")
        homepage.classList.toggle("actives")
    }

    
    return (
        <div className="header">
            <div className="headerwrap">
                <div className="jobicdiv">
                    <img src={joblogo} alt="" />
                </div>
                <div className="joblist">
                <div onClick={ handlehome}>HOME</div>
                    <div onClick={ handlejob}>JOBS </div>
                    <div>CV BUILDERS</div>
                    <div>SALARIES</div>
                    <div onClick={handlepostjobs}>POST JOBS</div>
                </div>
                <div className="siglog">
                    <button onClick={ handlogin} className="lg">Login</button>
                    <button onClick={handsign}  className="sgup">Sign Up</button>

                   
                </div>
                <div className="switch">
                    <div onClick={handletoggle} id="toggle">
                       <i className="Ind"></i>
                    </div> 
                    </div>
                    <div className='burger' onClick={() => setShow(!show)}>

{
    show === false ? <FcMenu /> : <GiCancel />
}
</div>
            </div>
        </div>
    )
}
export default Header