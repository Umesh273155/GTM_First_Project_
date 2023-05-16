  import "./style.css/FirstHomeContent.css";
 
  import Video10 from "../VideoContainer/Video10";

  function FirstHomeContent(){
   
    return (
        <div className="firstHomeContent"style={{marginTop:"0"}}>
            <div className="firstHomeContentText">

                <div className="paragraph" style={{marginBottom:"0"}}>
                <p className="para1" style={{color:"white"}} >Discover a Better</p>
               <p className="para2">Way to Get Fit with</p>
                </div>

                <div className="digifitness_Box"style={{marginTop:"0"}}>
               
              <img src="Digifitness.png"alt="Digifitness.png"className="digifitness.png"></img>
              </div>


              <div className="FirstHomeContentBtnBox"> 
             <button className="view_courses" ><img src="Frame 161.png"alt="Frame_161" className="frame_161"></img></button>
              <button  className="Aboutus_" > About Us </button>
             
              </div> 
             
            </div>
            <div className="firstVideoPlayerBox" >
             <Video10/>
            
          
            </div>
         
        </div>
    )
  }
  export default FirstHomeContent;
