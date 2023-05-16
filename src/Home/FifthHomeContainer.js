import './style.css/FifthHomeContainer.css';
import React from'react'
import VideoPlayers from '../VideoPlayers';
 
function FifthHomeContainer(){
    
    return(
        <>
        <div className="fifthHomeContainer" style={{marginTop:"0px"}}>
          <h3 style={{marginBottom:"0px",marginLeft:"70px",marginTop:"20px"}}>Course Content</h3>
         <div class="paraBoxx" style={{marginLeft:"70px",marginTop:"10px"}}>
           <p className="paragraphxx">32 Sections</p>
           <p className="paragraphxx">376 Lectures</p>
           <p className="paragraphxx">27h 8m total length</p>
         </div>
               <div className="main_Box">
         <div className="left_side_Box">
         <VideoPlayers/>
          <div className="img_box_">
            <img src="scrConnections.png"alt="" className="connections"style={{marginTop:"10px"}}></img>
           <br></br>
           <p className="courses" style={{marginRight:"15px",marginTop:"13px"}}> 50+ join this Course </p>
           <img src="lessons.png"alt=""className="lessonsImg" ></img>

           <p className="courses" style={{marginTop:"13px"}}>12 Lessons</p>
          </div>
             <h2 className="yoga-guide">Ultimate Yoga Guide: Step-by-Step Video</h2>
             <h2  className="yoga-guide">Lessons for All Levels </h2>
              <button className="Continue_Course_Btn">Continue Course &#x2192;</button>
              </div> 

        <div className="right_side_Box">
          <div className="overflowHoddenBox">
          <div className="inner_BOX">






          <img src="Rectangle 21 (4).png"alt="x" className="scrollImageBar"></img>
           <h4>Course Description</h4>
          </div>

          <div className="inner_BOX">
          <img src="Rectangle 21 (2).png"alt="x" className="scrollImageBar"></img>
           <h4>Course section-1</h4>
          </div>
          <div className="inner_BOX">
          <img src="Rectangle 21 (3).png"alt="x" className="scrollImageBar"></img>
           <h4>Right Exercise methods</h4>
          </div>
          <div className="inner_BOX">
          <img src="Rectangle 21 (5).png"alt="x"className="scrollImageBar"></img>
           <h4>Advance Tutorial-1 </h4>
          </div>
          <div className="inner_BOX">
          <img src="Rectangle 53 (1).png"alt="x"className="scrollImageBar"></img>
           <h4>Advance Tutorial-2</h4>
          </div>
         <div className="inner_BOX">
          <img src="Rectangle 53 (9).png"alt="x"className="scrollImageBar"></img>
           <h4>Advance Tutorial-3 </h4>
          </div>
          <div className="inner_BOX">
          <img src="Imag15.png"alt="x"className="scrollImageBar"></img>
           <h4>Advance Tutorial-4</h4>
          </div>
          <div className="inner_BOX">
          <img src="Rectangle 14 (2).png"alt="x"className="scrollImageBar"></img>
           <h4>Advance Tutorial-5</h4>
          </div>
          <div className="inner_BOX">
          <img src="umes_.jpg"alt="x"className="scrollImageBar"></img>
           <h4>Advance Tutorial-6</h4>
          </div>
          </div>
       </div>

       </div>
        </div>
        
        </>
    )
}
export default FifthHomeContainer;