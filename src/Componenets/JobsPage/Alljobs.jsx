import "./Jobspage.css"
import { MdWork } from "react-icons/md";
import axios from "axios";


const Alljobs =()=>{
    return(
      <div className="Jobsss">
      <div className="jobscard">
        <div className="jobcardwrap">
           <div className="jobicondiv"><MdWork style={{color: "white", fontSize: "25px"}}/></div> 
           <h2>Title of Job</h2>
           <p>description</p>
           <button className="Applybtn">Apply</button>
        </div>
      </div>
      </div>
    )
}
export default Alljobs