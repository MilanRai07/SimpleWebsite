import { useContext } from 'react';
import useFilterData from '../../00CustomHooks/FilterData';
import { ParentData } from '../Football';
import './secondSec.css';
import SSCard from './SSCard';
const SecondSec= () => {
const context=useContext(ParentData);
    return (
        <>
            <div className="SecondSecMainCont">
                <div className='SecondSec'>
                     {
                        useFilterData("Football").slice(3,11).map((ele,ind)=>{
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
export default SecondSec;

