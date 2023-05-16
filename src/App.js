
 import "./App.css"
 import  PathNavigator from './PathNavigator';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 import SignInPage from './Home/SignInPage';
import SignUpPage from "./Home/SignUpPage";


function App() {
  return (
 <>
 <Router>
    <div className="app">

    <Routes>
          <Route path="/signin" element={<> <SignInPage/></>} />
          <Route path="/signup" element={<> <SignUpPage/></>} />
          <Route path="/"element={<> <PathNavigator/></>}/>
       </Routes>
    </div>
    </Router>
   </>
  )
}

export default App;
 

