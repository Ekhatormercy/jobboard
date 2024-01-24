import "./Homescroll.css"
import { Data } from "../Data"
import bestcandidate from "../../assets/bestcandidate.png"
const Homescroll =()=>{

   
    return(
     <>
     <div className="homescrollbox">
     <div className="scrollwrap">
      <div className="whychoose">
        <h1>Why Choose Us As Your Recruitment Partner?</h1>
      </div>
      <div className="boxscontainer">
     {
        Data?.map((e)=>(
            <div className="hombox">
            <div className="boxwraapp">
                <div className="cirhome">
                    <img src={e.image}alt="" /></div>
                <h1>{e.text}</h1>
                <p>{e.ptag} </p>
            </div>
        </div>
        ))
     }
      </div>
     </div>
     </div>
     </>
    )
}
 export default Homescroll