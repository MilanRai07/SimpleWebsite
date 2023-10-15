import { useState } from "react";
const ThirdSecCard = (props) => {
    const [showcard, setShowCard] = useState(true);

    const { SSTitle, SSImg, SSDate,SSkey,contextData } = props;

    const changeToTrue = () => {
        setShowCard(true);
    }
    const changeToFalse = () => {
        setShowCard(false);
    }
    return (
        <>
            <div>
                {showcard ?
                    <div className="TSCImgContainer" onMouseOver={changeToFalse} onMouseOut={changeToTrue}>
                        <img src={SSImg} alt={SSTitle} className="ThirdSecImg"></img>
                    </div>
                    :

                    <div className="PopCardsThird" onMouseOver={changeToFalse} onMouseOut={changeToTrue}>
                        <div className="PImgContThird">
                            <img src={SSImg} alt={SSTitle} className="PImgThird"></img>
                        </div>
                        <div className='DnS'>
                            <p className="PDate">{SSDate}</p>
                        </div>
                        <div className='PTitleCont'>
                            <h2 className="PTitle">{SSTitle.slice(0, 45)}</h2>

                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button className="PButton ThirdBtn" onClick={()=>contextData.routeChange(SSkey)}>Read More</button>
                        </div>
                    </div>

                }
            </div>
        </>
    )
}
export default ThirdSecCard;