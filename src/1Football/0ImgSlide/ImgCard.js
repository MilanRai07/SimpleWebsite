import { useEffect } from "react";

const ImgCard=(props)=>{
    const {CImg,CDate,CTitle,CNews,Ckey,contextData}=props;
    useEffect(()=>{
        setTimeout(()=>{
            let newP=document.getElementById("news");
            let newT=document.getElementById("title");
            let newD=document.getElementById("date");
            let newS=document.getElementById("SlideBtn");
            newP.parentNode.removeChild(newP);
            newT.style.bottom="150px";
            newD.style.bottom="100px";
            newS.style.left="90%";
        },2100);
    },[])
  return(
    <>
           <div className="CaraImgCont" >
            <img src={CImg} alt={CTitle} className="CaraImg"></img>
            <h1 id="title" className="CaraTitle">{CTitle}</h1>
            <p id="date" className="CaraDate">{CDate}</p>
            <p id="news"className="CaraNews">{CNews.slice(0,200)+"....."}</p>
            <button id="SlideBtn"className="FButton" onClick={()=>contextData.routeChange(Ckey)}>Read More</button>
            </div>
    </>
  )
}
export default ImgCard;