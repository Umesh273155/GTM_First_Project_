
import './style.css/FooterContainer.css';
function FooterContainer(){
          return(
                    <>
                   <div className="footerContainer_box" >
                   <div className="first_box">
                    <img src="www.png"alt="##" className="wwwImg"></img>
                    <p className="paragraph___">We,re always In search for talented and motivated</p> 
                    <p className="paragraph___">people,Don't be shy introduce yourself</p>
                    <div className="icons_Box">
                    <a className="xx" href="https://www.facebook.com/"> <button className="icon-button"><img src="fb3.png"alt="x" className="icons"></img></button>  </a> 
                   
                    <a className="xx" href="https://twitter.com/login"> <button className="icon-button"><img src="twitter.png"alt="x"className="icons"></img></button> </a> 
                    <a className="xx" href="https://www.linkedin.com/feed/"> <button className="icon-button"><img src="linkdin2.png"alt="x"className="icons"></img></button></a>
                    <a className="xx" href="https://www.instagram.com/"> <button className="icon-button"> <img src="insta.png"alt="x"className="icons"></img></button></a> 
                         

                    </div>
                    <button className="contact_btn"alt="">Contact With us ^</button>
                   </div>
                   <div className="second_box boxw"style={{paddingTop:'30px'}}>
                      <h3 className="usefullinks">Useful Links</h3>
                      <p className="usefullinks">Marketplace</p>
                      <p className="usefullinks">Kimdergarden</p>
                      <p className="usefullinks">University</p>
                      <p className="usefullinks">University</p>
                      <p className="usefullinks">GYM Coaching</p>
                      <p className="usefullinks">FAQ</p>
                      <p className="usefullinks">About Us</p>
                      <p className="usefullinks">Privacy Policy</p>
                   </div>
                   <div className="third_box boxw"style={{paddingTop:'30px'}}>
                   <h3 className="usefullinks">Contact Us</h3>
                      <p className="usefullinks">Become Teacher</p>
                      <p className="usefullinks">Blog</p>
                      <p className="usefullinks">Instructor</p>
                      <p className="usefullinks">Events</p>
                      <p className="usefullinks">Course</p>
                      <p className="usefullinks">Carrier Page</p>
                      
                    </div>
                    <div className="fourth_box"style={{paddingTop:'30px'}}>
                    <h3 className="usefullinks">Get Contact</h3>
                      <p className="usefullinks">Phone:(406)555-0120</p>

                      <p className="usefullinks">E-mail:Admin@example.com</p>
                    
                     <h3 className="usefullinks"> Newsetter</h3>
                    <p className="impInfo_">2000+ Our students are suscribe around the world. Don't shy introduce yourself!  </p>
                       <input type="text"placeholder="Enter your Email here" className="_inputBox_"></input>
                        <br></br>
                        <button className="btn__Box">Suscribe</button>
                    </div>
             
                   </div>
                    </>
          )
}
export default FooterContainer;