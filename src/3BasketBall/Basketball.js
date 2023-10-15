import { createContext } from "react";
import BasketImgSlideIndex from "./0BImgSlide/BasketImgSlideIndex";
import BSecondSec from "./1BsecondSec/BsecondSec";
import BThirdSecIndex from "./2BThirdSec/BThirdSecIndex";
import { useNavigate } from 'react-router-dom';

const ParentData3=createContext();
const Basketball=()=>{
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
         <ParentData3.Provider value={contextValue}>
            <BasketImgSlideIndex/>
            <BSecondSec/>
            <BThirdSecIndex/>
        </ParentData3.Provider>
         </div>
        </>
    )
    }
    export default Basketball;
    export {ParentData3};