import { useState } from "react"
import "./Jobspage.css"
import Alljobs from "./Alljobs"
import Allaccounts from "./Allaccounts"
import Allfield from "./Allfield"
import Allremote from "./Allremote"
import Header from "../Header/Header"
const Jobspage =()=>{
    const [active, setActive] =useState("Active")
    const [alljobs, setalljobs] =useState(true)
    const [allfields, setallfields] =useState(false)
    const [allremote, setremotejobs] =useState(false)
    const [allaccount, setaccountjobs] =useState(false)

    const changeStateAllJobs=()=>{
        setalljobs(true);
        setremotejobs(false);
        setaccountjobs(false);
       setallfields(false);
    }
    const changeStateAllaccount=()=>{
        setalljobs(false);
        setaccountjobs(true);
        setremotejobs(false);
         setallfields(false);
    }
    const changeStateAllfields=()=>{
        setalljobs(false);
        setremotejobs(false);
        setaccountjobs(false);
       setallfields(true);
    }
    const changeStateAllremote=()=>{
        setalljobs(false);
        setremotejobs(true);
        setaccountjobs(false);
        setallfields(false);
    }


    

    return(

        <>

        <Header/>
       <div className="jobpage">
       
            <div className="titleh1">
                <h1>List Of Jobs Available</h1>
            </div>
            <div className="aalltitles">
                <div className={`alljobs1 ${alljobs? active : null} `} onClick={changeStateAllJobs}>ALL JOBS</div>
                <div className={`alljobs1 ${allfields ? active : null}`}onClick={changeStateAllfields}>Field Jobs</div>
                <div className={`alljobs1 ${allremote ? active : null}`} onClick={changeStateAllremote}>Remote Jobs</div>
                <div className={`alljobs1 ${allaccount ? active : null}`}onClick={changeStateAllaccount}>Accounting Jobs</div>
            </div>
       
       </div>

       <div className="mainjobs">
       {
        alljobs? <Alljobs/>:
        allaccount? <Allaccounts/>:
        allfields?<Allfield/>:
        allremote? <Allremote/>:
        null
       }
       </div>
       </>
    )
}
export default Jobspage