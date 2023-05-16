import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import introVideo from  '../video/fitness-72467.mp4';
import './Video.css/Video10.css';
 import poster_ from '../video/poster2.png';
 function Video10(){
  return (
    <div className="VideoContainers__" style={{width:"480px",paddingTop:"50px"}} >
      <Video   className="Video_sizes__"poster={poster_} >
        <source src={introVideo}type="video/mp4" autoPlay loop/>
      </Video>
    
    </div>
  )
 }
 export default Video10;