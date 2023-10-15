import useSportColor from "../../00CustomHooks/SportColor";

const MainCard = (props) => {
  const {MImg, MTitle, MSport, MDate,Mkey,contextData} = props;

  
  useSportColor(); //Calling the custom hook that I prepared for different colors according to the sports name
  return (
    <>
      <div className="MainCImg" >
        <img src={MImg} alt={MTitle} className="InMCI" onClick={()=>contextData.routeChange(MSport,Mkey)}></img>

        <div className="insideImg">
          <div className="TitleBg">
            <h2 className="MainCTitle">{MTitle.slice(0, 85)}</h2>
          </div>
          <p className="MainCDate">{MDate} </p>
          <p onClick={()=>contextData.sportNavigate(MSport)} style={{ backgroundColor: useSportColor(MSport) }} className="MainCSport">{MSport}</p>
        </div>
      </div>
    </>
  )

}

export default MainCard;