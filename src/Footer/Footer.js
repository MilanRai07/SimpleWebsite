import './Footer.css';
import { BiFootball } from 'react-icons/bi'
import {BsFacebook,BsYoutube,BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
    return (
        <>
            <div className="FooterMain">
                    <div className='logoFot'>
                        <BiFootball className='logoimg rotate' />
                        <h1>FUBSport</h1>
                    </div>
                    <div className='socialLink'>
                        <BsFacebook className='SM fa'/>
                        <BsYoutube className='SM yo'/>
                        <BsInstagram className='SM in'/>
                        <FiTwitter className='SM tw' />
                    </div>
                    <h4>@Copyright all right reserved</h4>
                </div>
        </>
    )
}
export default Footer;