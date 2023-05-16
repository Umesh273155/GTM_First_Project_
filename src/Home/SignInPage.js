

import "./style.css/SignInPage.css";


function SignInPage(){
   
   
    return (
        <div className="login">
            <h1 className="login_logo"> DIGIFITNESS</h1>
            <div className="signUpContainer">
                  <h2 className="loginHeader"style={{marginLeft:'28px'}}>Log in to Digifitness</h2>
                  <input type="text"className="email inputBox" placeholder="Email address or Phone number"></input>
                  <br>
                  </br>
                  <br></br>
                  <input type="password"className="password inputBox"placeholder="Password"></input>
                  <br></br><br></br>
                  <button type="submit" className="loginButton inputBox">Log in </button>
                  <br></br>
                 <br></br>
                 <p className="signuplink"><a href="/" className="signuplink">Forgotten account? </a>  </p>  
            </div>
       </div>
       
    )
}
export default SignInPage;