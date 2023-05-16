
import './style.css/SeventhHomeContainer.css';
import Video1 from '../VideoContainer/Video1';
import Video2 from "../VideoContainer/Video2";
import Video3 from "../VideoContainer/Video3";
import Video4 from "../VideoContainer/Video4";
import Video5 from "../VideoContainer/Video5";
import Video6 from "../VideoContainer/Video6";
import Video7 from "../VideoContainer/Video7";
import Video8 from "../VideoContainer/Video8";
import Video9 from "../VideoContainer/Video9";

function SeventhHomeContainer(){
 return (
    <div className="sevenHomeContainer_box" style={{marginTop:"0px"}}>
                    <div className="Inner-box">
                    <div style={{display:"flex"}}>
                   <img src="png 1 (1).png"alt="" className="specialCourses" ></img>
                    <button className="header-Button-">Expand All Course &#x2192; </button>
                     </div>
                  
                    <br></br>
                    <h3 className="popularCourses_" style={{marginBottom:"4px"}}>Most Popular Courses</h3>
                      <div style={{display:"flex"}}>
                      <Video1/>
                    <Video2/>
                    <Video3/>
                      </div>
                      <div style={{display:"flex"}}>
                      <Video4/>
                    <Video5/>
                    <Video6/>
                      </div>
                    
                      <div style={{display:"flex"}} className="Add_background_Image">

                      <Video7/>
                    <Video8/>
                    <Video9/>
                   
                      </div>
                   
                    </div>
      
    </div>
  )
}
export default SeventhHomeContainer;
