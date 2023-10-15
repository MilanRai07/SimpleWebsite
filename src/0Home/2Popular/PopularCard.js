import '../1TopBlock/TopBlock.css';
import useSportColor from '../../00CustomHooks/SportColor';
const PopularCard = (props) => {
    const { PImg, PTitle, PSport, PDate,contextData,Pkey } = props;
    useSportColor(); //Calling the cusotm hook
    return (
        <>
            <div className='PopCardsMainDiv'>
                <div className="PopCards">
                    <div className="PImgCont">
                        <img src={PImg} alt={PTitle} className="PImg"></img>
                    </div>
                    <div className='DnS'>
                        <p className="PDate">{PDate}</p>
                        <p onClick={()=>contextData.sportNavigate(PSport)} style={{backgroundColor:useSportColor(PSport)}}className="PSport">{PSport}</p>
                    </div>
                    <div className='PTitleCont'>
                        <p>{PTitle.slice(0, 45)}</p>

                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="PButton" onClick={()=>contextData.routeChange(PSport,Pkey)}>Read More</button>
                    </div>


                </div>
            </div>
        </>
    )
}
export default PopularCard;