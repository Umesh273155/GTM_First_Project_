 import './style.css/NavBar.css';
 function NavBar(){
    return(
        <div className="navBar_" style={{marginTop:"0",backgroundColor:"#06131C"}}>


          <ul className="navList">
            <li className="list">HOME  <span > <img src="vector.png"alt="vector_"className="vector_"></img></span></li>
          
          <li className="list">COURSES <span > <img src="vector.png"alt="vector_" className="vector_"></img></span></li>
           <li className="list">OTHER SERVICES  <span > <img src="vector.png"alt="vector_" className="vector_"></img></span></li> 
        <li className="list">CERTIFIED TRAINERS <span > <img src="vector.png"alt="vector_" className="vector_"></img></span></li>
         <li className="list">ABOUT US <span > <img src="vector.png"alt="vector_" className="vector_"></img></span></li>
          <li className="list">BLOG <span > <img src="vector.png"alt="vector_" className="vector_"></img></span></li>
            </ul> 


        </div>
    )
}
export default NavBar;

