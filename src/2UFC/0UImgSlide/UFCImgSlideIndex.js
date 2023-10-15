import { useContext, useEffect, useState } from 'react';
import useFilterData from '../../00CustomHooks/FilterData';
import useNextSlide from '../../00CustomHooks/NextImgSlider';
import{BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill,BsCircle} from 'react-icons/bs';
import  '../../1Football/0ImgSlide/Slider.css';
import ImgCard from '../../1Football/0ImgSlide/ImgCard';
import usePrevSlide from '../../00CustomHooks/PrevImgSlider';
import { ParentData } from '../UFC';
const UFCImgSlideIndex=()=>{
    const context=useContext(ParentData);
    const [current,setCurrent]=useState(0);
    const length=useFilterData("Football").slice(0,3).length;
  const ChangeNext=()=>{
    let next=useNextSlide(current,length); //custom hook to change 
    setCurrent(next);
  }
    const ChangePrev=()=>{
       let prev=usePrevSlide(current, length); //custom hook calling
       setCurrent(prev);
    }
    const setCurrentFunc=(ind)=>{
         setCurrent(ind);
    }
    useEffect(()=>{
        setTimeout(()=>{
            switch(current===length-1){
                    case (current===!length-1):
                        setCurrent(current+1);
                        break;
                         case (current===0):
                            setCurrent(length-1);
                            break;
                            case(current===!0):
                            setCurrent(current-1);
                            break;
                default:
                    setCurrent(0);
            }
        },6000);
    })
    return(
       <>
        <div className="slider"> 
        <BsFillArrowLeftSquareFill className='leftArrow' onClick={ChangePrev}/>
        <div className='MainSliderContents'>
        {
            useFilterData("UFC").slice(0,3).map((ele,ind)=>{
                const {img,date,title,news,id}=ele;
            return(
                <div key={ind} className={ind===current?'slide active':'slide'}>
                     {ind===current && (
                        <ImgCard
                        Ckey={id}
                        CImg={img}
                        CDate={date}
                        CTitle={title}
                        CNews={news}
                        contextData={context}
                      />
            )}        
                </div>
            )
            })     
        }
        </div>
        <div >
        <ul className='indicatorCircleDiv' id="ulInd">
        <li> <BsCircle className={current===0?'BCactive':'BC'}  onClick={()=>setCurrentFunc(0)}/></li>
        <li><BsCircle  className={current===1?'BCactive':'BC'} onClick={()=>setCurrentFunc(1)}/></li>
        <li><BsCircle className={current===2?'BCactive':'BC'} onClick={()=>setCurrentFunc(2)}/></li>
        </ul>
        </div>
        
        <BsFillArrowRightSquareFill className='rightArrow' onClick={ChangeNext}/>
    </div>

    <div>
    </div>
       </>
    )
}
export default UFCImgSlideIndex;