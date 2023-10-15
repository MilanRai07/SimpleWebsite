import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UFCImgSlideIndex from './0UImgSlide/UFCImgSlideIndex';
import USecondSec from './1UsecondSec/USecondSec';
import UThirdSecIndex from './2UThirdSec/UThirdSecIndex';
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
       <UFCImgSlideIndex/>
       <USecondSec/>
       <UThirdSecIndex/>
       </ParentData.Provider>
    </div>
    </>
)
}
export default Football;
export {ParentData};