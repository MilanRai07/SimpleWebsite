import './1TopBlock/TopBlock.css';
import TopImgBlock from './1TopBlock/TopImgBlock';
import PopularIndex from './2Popular/PopularIndex';
import FSecIndex from './3FootballSec/FSecIndex';
import BUSecIndex from './4BUSec/BUSecIndex';
import '../Main.css';
import {createContext} from 'react';
import {useNavigate} from 'react-router-dom';

const ParentData=createContext();
const Home=()=>{
    
    const navigate = useNavigate();
    const RouteChange=(SportName,KeyValue)=>{   //This is for Single Page Navigation for the news we want to read
            let path = `singlepage/${SportName}/${KeyValue}`;
            navigate(path);
    }

    const NavigateSport=(SportName)=>{
        window.scrollTo(0, 0);
        if(SportName==="Football"){
            let pathS="/football";
            navigate(pathS);
        }else if(SportName==="Basketball"){
            let pathS="/basketball";
            navigate(pathS);
        }else{
            let pathS="/ufc";
            navigate(pathS);
        }
    
    }
    const contextValue={
          routeChange:RouteChange,
          sportNavigate:NavigateSport
    }
    return(
        <>
        <div className='ForPadding'>
        <ParentData.Provider value={contextValue}>
            <TopImgBlock/>
            <PopularIndex/>
            <FSecIndex/>
            <BUSecIndex/>
         </ParentData.Provider>
        </div>
        </>
    )
    }
    export default Home;
    export {ParentData};