import { useRef, useState } from "react";
import {BsEmojiSmileFill} from 'react-icons/bs';
const SubscribeCard=()=>{
    const MyEmail=useRef();
    const[show,setShow]=useState(true);
    const [valid,setValid]=useState("");

    const formSubmit=(event)=>{
        event.preventDefault();
        console.log(MyEmail.current.value);
        if(MyEmail.current.value===""){
            setValid("Please enter your email");
        }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(MyEmail.current.value)){
            setShow(false);
        }else{
            setValid("Invalid email");
        }
        
    }
 return(
    <>
        {show?
        <div className="Subscribe">
        <h3>Subcribe For Other News</h3>
        <form action="" method="" onSubmit={formSubmit} >
            <input type="gmail" className="SubInput" placeholder="Email" ref={MyEmail}>
            </input>
            <p className="valid">{valid}</p>
            <div className="SubBtnCont">
            <button type="submit" className="FButton SubBtn"> Subscribe</button>
            </div>
            </form>
        </div>
        :
        <div className="Okay">
            <h3>You have been Subscribed!</h3>
            <BsEmojiSmileFill className="emoji"/>
        </div>
        }
    </>
 )
}
export default SubscribeCard;