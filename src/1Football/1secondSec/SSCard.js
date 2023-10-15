import './secondSec.css';
const SSCard=(props)=>{
    
    const {SSTitle,SSImg,SSDate,SSNews,SSkey,contextData}=props;
 return(
    <>
        <div className='PopCardsMainDiv'>
                <div className="PopCards SSCard">
                    <div className="PImgCont newPImgCont">
                        <img src={SSImg} alt={SSTitle} className="PImg"></img>
                    </div>
                    <div className='DnS'>
                        <p className="PDate">{SSDate}</p>
                    </div>
                    <div className="PTitileCont AddPTitle">
                        <h2 className="PTitle">{SSTitle<=SSTitle.slice(0, 50)?SSTitle:SSTitle.slice(0,45)+"...."}</h2>
                    </div>
                    <div className="SSNewsCont" >
                          <p>{SSNews.slice(0,50)+"...."}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="PButton" onClick={()=>contextData.routeChange(SSkey)}>Read More</button>
                    </div>
                </div>
            </div>
    </>
 )
}
export default SSCard;