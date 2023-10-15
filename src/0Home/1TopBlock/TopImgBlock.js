import {Data} from '../../Data';
import './TopBlock.css';
import MainCard from './MainCard';
import { useContext } from "react";
import { ParentData } from "../Home";
const TopImgBlock=()=>{
    const context=useContext(ParentData);
    const newData=Data.slice(0,9);
    return(
        <>
        <div className="ForPad">
            <div className="MainCont1">
                {
                    newData.map((ele,ind)=>{
                        const {img,sport,date,title,id}=ele;
                        return(
                            <div key={ind}className='HomeB1'>
                                <MainCard
                                Mkey={id}
                                MImg={img}
                                MSport={sport}
                                MDate={date}
                                MTitle={title}
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
    export default TopImgBlock;