import "./Footer.css"
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Footer =()=>{
    return(
      <div className="Footerdiv">
        <div className="footwrap">
            <div className="footup">
              <div className="footh1">
                <h1>Subscribe to Job Alert</h1>
              </div>
              <p>Join Our Happy Subscribers</p>
              <div className="footinput">
                <input type="text" placeholder="Enter Your Email Here!" />
                <button className="subbtn">Subscribe <MdOutlineArrowForwardIos /></button>
              </div>
            </div>
            <div className="footdown">
                <div className="foot1">
                    <div className="downh1">
                    <h3>CANDIDATES</h3>
                    </div>
                    <p>Job Listing</p>
                    <p>CV Builder</p>
                    <p>Salaries & Reviews</p>
                    <p>Internship</p>
                    <p>Career Tips & Info</p>
                    <p>Job Trends</p>
                    <p>HR Glossary</p>
                    <p>Companies Hiring</p>
                </div>
                <div className="foot1">
                    <div className="downh1">
                    <h3>COMPANIES</h3>
                    </div>
                    <p>Post a Job</p>
                    <p>Shortlisting Service</p>
                    <p>Recruitment Service</p>
                    <p>Candidate Search</p>
                    <p>Career Tips & Info</p>
                    <p>Advertise</p>
                   
                </div>
                <div className="foot1">
                    <div className="downh1">
                    <h3>SHARING</h3>
                    </div>
                    <p>Job Widget</p>
                    <p>XML Feed</p>
                    <p>SiteMap (HTML)</p>
                    <p>Testimonials</p>
                    <p>Help - FAQS</p>
                   
                </div>
                <div className="foot1">
                    <div className="downh1">
                    <h3>JOB FINDER AFRICA</h3>
                    </div>
                    <p>Jobs in Ghana</p>
                    <p>Jobs in Kenya</p>
                    <p>Jobs in Nigeria</p>
                    <p>Jobs in South Africa</p>
                    
                </div>
            </div>
        </div>
      </div>
    )
}
export default Footer