import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Main.css';
import ImgSliderIndex from './0ImgSlide/ImgSlideIndex';
import SecondSec from './1secondSec/SecondSec';
import ThirdSecIndex from './2ThirdSec/ThirdSecIndex';

const ParentData=createContext();
const Football=()=>{
  let navigates = useNavigate();
  const RouteChanges=(Key)=>{
          let path = `singlepage/${Key}`;
          navigates(path);
  }
  const contextValue={
        routeChange:RouteChanges,
  }
return(
    <>
    <div className="ForPadding">
    <ParentData.Provider value={contextValue}>
      <ImgSliderIndex/>
      <SecondSec/>
      <ThirdSecIndex/>
      </ParentData.Provider>
    </div>
    </>
)
}
export default Football;
export {ParentData};