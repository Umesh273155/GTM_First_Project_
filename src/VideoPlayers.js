
import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import introVideo from  './video/fitness-72467.mp4';
import './VideoPlayers.css';
// import poster_ from './video/Screenshot 2023-05-11 015518.png';
 
 function VideoPlayers(){
  return (
    <div className="videoContainer">
      <Video   className="video_size">
        <source src={introVideo}type="video/mp4" autoPlay loop
        />
      </Video>
    </div>
  )
 }
 export default VideoPlayers;