import "./style.css/NinthHomeContainer.css";
import React,{useState} from 'react'
function NinthHomeContainer(){
  
  const [week,setWeek]=useState('plan_Box1 box__ backgroundColor');
  const [month,setMonth]=useState('plan_Box2 box__');
  const [year,setYear]=useState('plan_Box3 box__');


/////btn changing background color
const [weekbtn,setWeekBtn]=useState('_btn btn1 btnbackgroundColor');
const [monthbtn,setMonthBtn]=useState('_btn btn2');
const [yearbtn,setYearBtn]=useState('_btn btn3');



      function weeklyContainer(){
        setWeek('plan_Box1 box__ backgroundColor');
        setYear('plan_Box3 box__');
        setMonth('plan_Box2 box__');
        setWeekBtn('_btn btn1 btnbackgroundColor')
        setMonthBtn('_btn btn2');
        setYearBtn('_btn btn3');
      }
      function monthlyContainer(){
        setMonth('plan_Box2 box__ backgroundColor');
        setWeek('plan_Box1 box__');
        setYear('plan_Box3 box__');
        setMonthBtn('_btn btn2 btnbackgroundColor')
        setWeekBtn('_btn btn1');
        setYearBtn('_btn btn3');
      }
      function yearlyContainer(){
        setYear('plan_Box3 box__ backgroundColor');
        setWeek('plan_Box1 box__');
        setMonth('plan_Box2 box__');
        setYearBtn('_btn btn3  btnbackgroundColor');
        setWeekBtn('_btn btn1');
        setMonthBtn('_btn btn2');
      }
   

     

   

    return (
        <>
            <div className="ninthHomeContainer_Box" style={{paddingTop:"20px"}}>


                   <h3 className="_heading" >Choose The Program </h3>
                   <p className="_para">Choose the Payment Option that Works Best for You and Start your Fitness Journey Today </p>
               <div className="button_Box">
                     <button className={weekbtn} onClick={()=> weeklyContainer()}>Yearly Plan</button>
                     <button className={monthbtn}onClick={()=>monthlyContainer()}>Monthly Plan</button>
                     <button className={yearbtn}onClick={()=>yearlyContainer()}>Weekly Plan</button>

               </div>
               <div className="plan_Main_Box">

               <div className={week}>
                 <h4 className="heading__Text" style={{marginBottom:"10px"}}>Basic Plan</h4>
                 <button className="plan_btn" style={{marginTop:"0",marginBottom:"10px"}}>Free for a Month</button>
                    <h3  className="dollor_Box"style={{marginBottom:"0",marginTop:"5px"}}>$8.00/Monthly</h3>
                    <div className="_paragraph_">
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>Unlimited Access Courses</p>
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>Certified After Completion</p>
                     <p><span><img src="vectorXX.png"alt="xx"className="remark_icon"></img></span>High Resolution Videos</p>
                     <p><span><img src="vectorXX.png"alt="xx"className="remark_icon"></img></span>24/7 Dedicated Support</p>
                     </div>
                     <button className="plans_btn">Join Course Plan</button>
                 
               </div>

               <div className={month}>
               <h4 className="heading__Text" style={{marginBottom:"10px"}}>Standered Plan</h4>
               <button className="plan_btn  box2_" style={{marginTop:"0",marginBottom:"10px"}}>Most Popular</button>
               <h3  className="dollor_Box" style={{marginBottom:"0",marginTop:"5px"}}>$20.00.00/Monthly</h3>
               <div className="_paragraph_">
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>Unlimited Access Courses</p>
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>Certified After Completion</p>
                     <p> <span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>High Resolution Videos </p>
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>24/7 Dedicated Support</p>
                     </div>
                     <button className="plans_btn" style={{backgroundColor:"#1CD15D",color:"white"}}>Join Course Plan</button>
               </div>

                <div className={year}>
                <h4 className="heading__Text" style={{marginBottom:"10px"}}>Exclusive Plan</h4>
                <button className="plan_btn" style={{marginTop:"0",marginBottom:"10px"}}>Free for a Month</button>
                <h3  className="dollor_Box" style={{marginBottom:"0",marginTop:"5px"}}>$39.00/Monthly</h3>
                <div className="_paragraph_">
                <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>Unlimited Access Courses</p>
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>Certified After Completion</p>
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>High Resolution Videos</p>
                     <p><span><img src="vectorXX.png"alt="xx" className="remark_icon"></img></span>24/7 Dedicated Support</p>
                     </div>
                     <button className="plans_btn">Join Course Plan</button>
                </div>
                      
           
                </div>
                <div className="image_box_And_text_box">
                <div className="image_box">
                <img src="screens.png"alt="xx"className="_img_"></img>
                 </div>
                  <div className="text_Box">
                    <img src="Digifitness Creator.png"alt="#" className="style_text"></img>
                    <p className="parag_">Join the Revolution and Turn your</p> 
                    <p className="parag_">Passion for Fitness into a Lucrative</p> 
                    <p className="parag_">Career with Digifitness!</p>
                    <button className="join_btn">Join Now &#x2192;</button>
                  </div>
                   
                </div>
            

            </div>
        </>
    )
}
export default NinthHomeContainer;