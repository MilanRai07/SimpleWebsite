import './FSec.css';
import {BsFacebook,BsYoutube,BsInstagram } from "react-icons/bs";
import {FiTwitter } from "react-icons/fi";
const SocialMedia=()=>{
 return(
    <>
        <div className='MainSocial'>
        <div className="FH2Div Social">
                    <h2 className="FHead SocialHead">Follow Us</h2>
                </div>
                <div className='Sites'>
                <div><BsFacebook className='face sit'/></div>
                      <div><BsYoutube className='yout sit'/></div>
                      <div><BsInstagram className='inst sit'/></div>
                      <div className='sit twit'> <FiTwitter /></div>
                </div>
        </div>
    </>
 )
}
export default SocialMedia;