

import Header from './Home/Header';
 import Navbar from './Home/NavBar';
import FirstHomeContent from './Home/FirstHomeContent';
import SecondHomeContent from './Home/SecondHomeContent';
import ThirdHomeContainer from './Home/ThirdHomeContainer';
 import FourthHomeContainer from './Home/FourthHomeContainer';
import FifthHomeContainer from './Home/FifthHomeContainer';
import SixHomeContainer from './Home/SixHomeContainer';
import SeventhHomeContainer from './Home/SeventhHomeContainer';
import EighthHomeContainer from './Home/EighthHomeContainer';
 import NinthHomeContainer from './Home/NinthHomeContainer';
 import FooterContainer from './Home/FooterContainer';
 
 function PathNavigator(){

     return ( 
    <div className="pathNaviagtor"> 
    <div className="home"style={{marginBottom:"0"}} >
    <Header/>
    <Navbar/> 
     <FirstHomeContent/>
   <SecondHomeContent/>
   <ThirdHomeContainer/>
   <FourthHomeContainer/>
   <FifthHomeContainer/>
   <SixHomeContainer/>
   <SeventhHomeContainer/>
   <EighthHomeContainer/>
   <NinthHomeContainer/>
   <FooterContainer/>  
  
  </div> 
  </div>
          
        )
    }
    export default PathNavigator;