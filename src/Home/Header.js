import './style.css/Header.css';

  import {Link,useNavigate} from "react-router-dom";
function Header() {
  const navigate=useNavigate();
  return (

<>
<div className="header" >
     <div class="header_content" >

        <div classname="text" style={{marginRight:"3rem",marginLeft:"5rem",paddingRight:"0",paddingTop:"0"}} >

          <img src="Screenshot 2023-05-12 001455.png"alt="" className="heading_DIGIFITNESS" style={{width:"200px",height:"70px"}} ></img>
      
        </div>
       
       <button className="menuBtn" > <img src="Frame 6.png " alt ="frame" className="Frame_6"></img></button>
        <input type="text" placeholder="Search your Fitness Course " className="input_Box" ></input>

        <button className="searchIcon"> <img src="Frame 4.png"alt="Frame 4"className="Frame_4"style={{marginRight:"30px"}} ></img></button>
       <div>
       
        <button className="signIn" onClick={()=>navigate('/signin')}><img src="Frame 5.png"alt="Frame 5"className="Frame_5" ></img></button>
     
     
       </div>
      
    
     
    {/*  */}
     <button className="signUp"onClick={()=>navigate('/signup')} > <img src="Frame 4 (1).png" alt="Frame 4(1)" className="Frame_4_1"></img></button>
    
     </div>
 
    </div>
</>
    
  )
}

export default Header;
