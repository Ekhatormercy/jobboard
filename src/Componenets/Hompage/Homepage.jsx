import jobgirlimg from "../../assets/jobgirlimg.png"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./Homepage.css"
// import "./Header.css"
import Homescroll from "./Homescroll"
const Homepage =()=>{

    const homepage = document.getElementById("Homepagebox")

    const toggle =()=>{
        homepage.classList.toggle("actives")
    }
    return(
       <>
       <Header/>
       
       <div id="Homepagebox">
       {/* <div id="toggle">
                       <i className="Ind"></i>
                    </div> */}
        <div className="hmewrapper">
            <div className="lefthme">
                <h1>Discover a New <span>Career</span> Designed for You!</h1>
                <p className="p">Find the Career you Desrve </p>
                <p>Your Job Search Starts and Ends with Us</p>
                <p>Avoid wasting time searching for qualified and suitable candidates - post your job advert or engage our expert recruiters and get your positions filled. We guarantee maximum Return on Investment.</p>
            </div>
            <div className="righthom">
              <div className="girlimg"> 
               <img src={jobgirlimg} alt="" /></div>
            </div>
        </div>
       </div>
       <Homescroll/>
       <Footer/>
       </>
    )
}
export default Homepage