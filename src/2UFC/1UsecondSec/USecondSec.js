import { useContext } from 'react';
import useFilterData from '../../00CustomHooks/FilterData';
import '../../1Football/1secondSec/secondSec.css';
import SSCard from '../../1Football/1secondSec/SSCard';
import { ParentData } from '../UFC';
const USecondSec= () => {
    const context=useContext(ParentData);
    return (
        <>
            <div className="SecondSecMainCont">
                <div className='SecondSec'>
                     {
                        useFilterData("UFC").slice(3,11).map((ele,ind)=>{
                            const {title,date,img,news,id,sport}=ele;
                            return(
                            <div key={ind}>
                                   <SSCard
                                    SSkey={id}
                                    SSSport={sport}
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
export default USecondSec;

