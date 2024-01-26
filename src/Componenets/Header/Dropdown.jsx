import { useNavigate } from "react-router-dom";
const Dropdown = () => {

    const Nav = useNavigate()

    const home =()=>{
        Nav("/home")
    }
    const jobs =()=>{
        Nav("/job")
    }
    const alljobs =()=>{
        Nav("/postjobs")
    }
  return (
    <div className="dropdown">
      <div onClick={home}>HOME</div>
      <div onClick={jobs}>JOBS</div>
      <div>CV BUILDERS</div>
      <div>SALARIES</div>
      <div onClick={ alljobs}>POST JOBS</div>

    </div>
  );
};

export default Dropdown;
