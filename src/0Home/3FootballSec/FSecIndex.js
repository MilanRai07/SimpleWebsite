import useFilterData from '../../00CustomHooks/FilterData';
import './FSec.css';
import FSecCard from './FSecCard';
import FSecSideNav from './FSecSideNav';
import { ParentData } from "../Home";
import { useContext } from "react";
const FSecIndex = () => {
    const context=useContext(ParentData);
    useFilterData(); //calling custom hook to filter data with football only

    return (
        <>
            <div className="MainFSecDiv">
                <div className="FH2Div">
                    <h2 className="FHead ForFootball">Football News</h2>
                </div>
                <div className='FootballContainer'>
                    <div className='FCardContainer' >
                    {
                        useFilterData("Football").slice(0,4).map((ele,ind)=>{
                            const { img, date, title, news,id,sport} = ele;
                            return(
                            <div key={ind}>
                            <FSecCard 
                                Fkey={id} 
                                FImg={img}
                                FTitle={title}
                                FDate={date} 
                                FNews={news} 
                                FSport={sport} 
                                contextData={context}
                            />
                            </div>
                            )
                        })  
                    }
                    </div>

                    <div className="SideNav">
                          <FSecSideNav/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FSecIndex;

