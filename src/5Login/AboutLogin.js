import { useState } from 'react';
import LogIn from './LogIn';
import './Login.css';
import SignIn from './SignIn';
const AboutLogin=()=>{
    const [activeone,setActiveone]=useState(true);
    const SignUp=()=>{
        setActiveone(true);
    }
    const Login=()=>{
        setActiveone(false);
    }
    return(
        <>
        <div className="FormMainBody">
        <div className="FormMainContainer">
           <div className="FormChoose">
                <div className={activeone?"activeOne":""}><h4 onClick={SignUp}>Sign up</h4></div>
                <div className={activeone?"":"activeOne"}><h4 onClick={Login}>Login</h4></div>
           </div>
           {
             activeone? 
             <SignIn/>:
            <LogIn/>
           }
           
        </div>
        </div>
        </>
    )
    }
    export default AboutLogin;