import useDoubleFilterData from "../../00CustomHooks/DoubleFilter";
import ThirdSecCard from "../../1Football/2ThirdSec/ThirdSecCard";
import '../../1Football/2ThirdSec/ThirdSec.css';
import { useContext } from "react";
import { ParentData } from '../UFC';

const UThirdSecIndex=()=>{
    const context=useContext(ParentData);
return(
    <>
        <div className="ThirdSecMainContainer">
        <div className="FH2Div">
                    <h2 className="FHead">Popular This Month</h2>
                </div>
        <div className="ThirdContents">
             {
                useDoubleFilterData("UFC","popular").map((ele,ind)=>{
                    const {title,date,img,news,id}=ele;
                    return(
                        <div key={ind} className="needed">
                            <ThirdSecCard 
                            SSkey={id}
                                    SSImg={img}
                                    SSDate={date}
                                    SSTitle={title}
                                    SSNews={news}
                                    contextData={context}
                            />
                        </div>
                    )
                })
             }
        </div>
        </div>
    </>
)
}
export default UThirdSecIndex;