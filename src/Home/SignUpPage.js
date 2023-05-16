
 import './style.css/SignUpPage.css';

function SignUpPage(){   
  
    return (
        <div className="signUpPage">
           <div className="inner_signUp_page">
                  <h2 className="createNewAccHeader"style={{marginBottom:'20px',color:'hsl(218, 95%, 8%)',marginTop:'30px'}}> Create a new account</h2>
             
<hr></hr>
               <div className="input_main_box_" style={{display:'flex',marginTop:'0px',margin:'auto'}}> 
                <input type="text" className="input_Box_Name" placeholder="Enter first name"required></input>
               <input type="text" className="input_Box_Name" placeholder="Enter last name" required></input>
            </div>
          
         
            <input type="email number" className="input_Box_email"placeholder="Enter email /mobile number" required></input>
            <br></br>
          
            <input type="password" className="input_Box_email"placeholder="Enter your Password" required></input>
            <br></br>
            <input type="password" className="input_Box_email"placeholder="Re-enter your Password " required></input>
            <br></br>
          
                 

{/*                  
            <h4 style={{marginLeft:'30px',marginBottom:'5px',color:'rgb(25, 26, 41);',marginTop:'20px'}}>Gender :</h4>
                 
                  <div className="genderMainBox">
                
                <div className="gender_Box">
                <label for="gender">Male</label>
               <input type="radio" name="x"></input>
                </div>
              
             
               <div className="gender_Box">
               <label for="gender">Female</label>
               <input type="radio" name="x"></input>
               </div>
               
               <div className="gender_Box">
               <label for="gender">Others</label>
               <input type="radio" name="x"></input>
               </div>
                   
               </div> */}

              
               <p style={{color:'#04314e',marginLeft:'20px'}}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
              <div className="sign_up_btn" style={{marginBottom:'0px'}}>
              <button type="submit" className="Sign_Up_button" >Sign Up</button>
              </div>
             
               <br></br>
               <a href="#/"style={{marginTop:'0px',textDecoration:"none",marginLeft:'28%',}} >Already have an account?</a>
               <br></br>

              
           </div>
        
        </div>
    )
}
export default SignUpPage;
