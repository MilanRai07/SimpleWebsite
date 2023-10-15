import PopularCard from "./PopularCard";
import './Popular.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Data } from '../../Data';
import { useContext, useEffect, useState } from "react";
import { ParentData } from "../Home";

const PopularIndex = () => {
    const context=useContext(ParentData);
    const [popular, setPopular] = useState(Data);
    useEffect(() => {
        let categ = "popular";
        let newData = Data.filter((ele) => {
            return ele.category === categ;
        })
        setPopular(newData);
    }, [])
    const prevSlideCard = () => {
        var slide = document.getElementById("slide");
        slide.scrollLeft = slide.scrollLeft - 500;
    }
    const nextSlideCard = () => {
        var slide = document.getElementById("slide");
        slide.scrollLeft = slide.scrollLeft + 500;
    }
    return (
        <>
            <div className="MainPopdiv">
                <div className="PH2Div">
                    <h2 className="PHead">Popular News</h2>
                </div>
                <BsFillArrowLeftCircleFill className='prevA' onClick={prevSlideCard} />
                <div id="slide" className="PopularContainer">


                    {
                        popular.map((ele, ind) => {
                            const { img, sport, date, title, news,id } = ele;
                            return (
                                <div key={ind}>
                                <PopularCard
                                    Pkey={id}
                                    PImg={img}
                                    PSport={sport}
                                    PDate={date}
                                    PTitle={title}
                                    PNews={news}
                                    contextData={context}
                                />
                                </div>
                            )
                        })

                    }

                </div>
                <BsFillArrowRightCircleFill className='nextA' onClick={nextSlideCard} />
            </div>

        </>

    )
}
export default PopularIndex;