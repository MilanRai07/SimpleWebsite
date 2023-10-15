import './FSec.css';
import SocialMedia from './SocialMedia';
import {useNavigate} from "react-router-dom";
const FSecSideNav = () => {
    
    let navigate=useNavigate();
    const Navigator=(getPath)=>{
        window.scrollTo(0,0);
        let path=`/${getPath}`;
        navigate(path);
    }
    return (
        <>
            <div className='InSideNav'>
                <button className='NavBtn NBF' onClick={()=>Navigator("football")}>Football</button>
            </div>
            <div className='InSideNav'>
                <button className='NavBtn NBU' onClick={()=>Navigator("ufc")}>UFC</button>
            </div>
            <div className='InSideNav'>
                <button className='NavBtn NBB' onClick={()=>Navigator("basketball")}>Basketball</button>
            </div>
            <div className='InSideNav'>
                <button className='NavBtn NBP' onClick={()=>Navigator("login")}>Be a Member</button>
            </div>
            <div className='InSideNav'>
                <button className='NavBtn NBA' onClick={()=>Navigator("aboutus")}>About Us</button>
            </div>
            <div className='InSideNav'>
                <button className='NavBtn NBC' onClick={()=>Navigator("contact")}>Contact</button>
            </div>
            <SocialMedia/> 
        </>
    )
}
export default FSecSideNav;