import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSportColor from "../00CustomHooks/SportColor";
import { Data } from "../Data";
import './singlepage.css';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { BsYoutube } from "react-icons/bs";
import SubscribeCard from "./SubscribeCard";
import Comment from "./Comment";

const SinglePage = () => {
  const { Fkey } = useParams();
  const [item, setItem] = useState('');

  let num = parseInt(Fkey);

  useEffect(() => {
    window.scrollTo(0, 0);
    const newIt = Data.find((ele) => {
      return ele.id === num;
    })
    setItem(newIt);
    console.log(newIt);
  }, [setItem, num])

  const {img, title, sport, date, news } = item;
  return (
    <>
      <div className="ForPadding">
        <div className="BannerDiv">
          <img src="/Banner.png" className="BannerImg" alt="This is an ad"></img>
        </div>
        <div className="SinglePageMainContainer">
          <div className="NewsCont">
            <h1 className="NCTitle">{title}</h1>
            <p className="NCDate">{date}</p>
            <div className="NCSport">
              <p className="NCSp" style={{ backgroundColor: useSportColor(sport) }}>{sport}</p>
            </div>
            <div className="NCShare">
              <div className="InNCS NCS1"> <FaFacebookF /> Share</div>
              <div className="InNCS NCS2"><BsInstagram />Instagram</div>
              <div className="InNCS NCS3"><FiTwitter />Twitter</div>
            </div>
            <div className="NCImgCont">
              <img src={img} alt={sport} className="NCImg"></img>
            </div>
            <div className="NCNews">
              <p>{news}</p>
            </div>
            <div>
        
        <Comment/>
      </div>
          </div>
          <div className="OtherCont">
            <div className="stayConnect">
              <div className="FH2Div">
                <h2 className="FHead">Connect With Us</h2>
              </div>
              <div className="InNCS NCS1 Sc"> <FaFacebookF /> Facebook</div>
              <div className="InNCS NCS2 Sc"><BsInstagram />Instagram</div>
              <div className="InNCS NCS3 Sc"><FiTwitter />Twitter</div>
              <div className="InNCS NCS4 Sc"><BsYoutube />Youtube</div>
            </div>
            <div className="SubscribeMainCont">
            <div className="FH2Div">
                    <h2 className="FHead">Subscribe</h2>
                </div>
                <SubscribeCard/>
            </div>
            <div className="BannerDiv2">
          <img src="/ad2.jpg" className="BannerImg2" alt="This is an ad"></img>
            </div>
          </div>
        </div>
       
      </div>
      
    </>
  )
}
export default SinglePage;