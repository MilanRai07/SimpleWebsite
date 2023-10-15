const FSecCard = (props) => {
    const { FImg, FTitle, FNews, FDate, Fkey,FSport,contextData} = props;
    return (
        <>
            <div className="FCard">
                <div className="FImgCont">
                    <img className="Fimg" src={FImg} alt={FImg}></img>
                </div>
                <div className="FContent">
                    <h3 className="FTitle">{FTitle <= FTitle.slice(0, 65) ? FTitle : FTitle.slice(0, 65) + "..."}</h3>
                    <p className="FDate">{FDate}</p>
                    <p className="FNews">{FNews.slice(0, 175) + "......"}</p>
                    <div>
                    <button onClick={()=>contextData.routeChange(FSport,Fkey)} className="FButton">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FSecCard;