import { useContext } from 'react';
import useFilterData from '../../00CustomHooks/FilterData';
import '../../1Football/1secondSec/secondSec.css';
import SSCard from '../../1Football/1secondSec/SSCard';
import { ParentData3 } from '../Basketball';
const BSecondSec= () => {
    const context=useContext(ParentData3);

    return (
        <>
            <div className="SecondSecMainCont">
                <div className='SecondSec'>
                     {
                        useFilterData("Basketball").slice(3,11).map((ele,ind)=>{
                            const {title,date,img,news,id}=ele;
                            return(
                            <div key={ind}>
                                   <SSCard
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
export default BSecondSec;

