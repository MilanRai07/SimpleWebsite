import useDoubleFilterData from "../../00CustomHooks/DoubleFilter";
import ThirdSecCard from "./ThirdSecCard";
import './ThirdSec.css';
import { useContext } from "react";
import { ParentData } from "../Football";

const ThirdSecIndex=()=>{
    const context=useContext(ParentData);
return(
    <>
        <div className="ThirdSecMainContainer">
        <div className="FH2Div">
                    <h2 className="FHead">Popular This Month</h2>
                </div>
        <div className="ThirdContents">
             {
                useDoubleFilterData("Football","popular").map((ele,ind)=>{
                    const {title,date,img,news,id}=ele;
                    return(
                        <div key={ind} className="needed">
                            <ThirdSecCard
                                SSImg={img}
                                SSkey={id}
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
export default ThirdSecIndex;