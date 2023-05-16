import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import introVideo from  '../video/exersise_.mp4';
import './Video.css/Video1.css';
import poster_ from '../video/Rectangle 53 (5).png';
 //Rectangle 53 (5)
 function Video5(){
  return (
    <div className="videoContainer__">
      <Video   className="video_size__"style={{width:"250px",height:"146px"}}poster={poster_}>
        <source src={introVideo}type="video/mp4" autoPlay loop
        />
      </Video>
       <img src="star.png"alt="star"className="star star1"></img>
       <img src="star.png"alt="star"className="star"></img>
       <img src="star.png"alt="star"className="star"></img>
       <img src="star.png"alt="star"className="star"></img>
       <img src="half_star.png"alt="star"className="star half_star"></img>
       <span>(15 Reviews)</span>
      <h3 classname="headX" style={{marginLeft:"15px",marginTop:"17px"}}>Transform Your Body in Just 5 Weeks with cardio Program</h3>
      <div className="_B_O_X_">
      <img src="lessons.png"alt=""style={{height:"25px",marginRight:"3px"}} ></img> 
      <p>12 Lessons </p>
      <img src="iconsmen.png"alt=""style={{height:"25px",marginLeft:"5%",marginRight:"3px"}}></img> 
      <p>50 Students </p>
      </div>
          <p style={{color:"grey",marginLeft:"5%",paddingRight:"20px"}}>It is long establised fact that is a reader will be distracted.</p>
       <img src="Ellipse 6.png"alt="" style={{width:"26px",height:"26px",marginRight:"10px",marginLeft:"15px"}}></img>
       <span style={{color:"rgb(85, 85, 85)"}}>By Angela In Fitness</span>
       <h2 style={{marginLeft:"19px",marginTop:"20px"}}>$100 <span><img src="dollor.png"alt="" style={{width:"30px",height:"20px"}}></img></span></h2> 

       <button className="learn_More_btn">Learn More  &#x2192; </button>
    </div>
  )
 }
 export default Video5;