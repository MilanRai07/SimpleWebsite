import BasketballCard from './BasketBallCard';
import './BUSec.css';
import { ParentData } from "../Home";
import useFilterData from '../../00CustomHooks/FilterData';
import { useContext } from 'react';
const BUSecIndex = () => {
    const context=useContext(ParentData);
    useFilterData();
    return (
        <>
            <div className="MainBSecIndexDiv">
                <div className="FH2Div">
                    <h2 className="FHead ForBasketball ">Basketball News</h2>
                </div>
                <div className="MainBasketBall">
                    {
                        useFilterData("Basketball").slice(0, 8).map((ele, ind) => {
                            const { img, date, title, news,id,sport } = ele;
                            return (
                                <div key={ind}>
                                    <BasketballCard
                                        Bkey={id}
                                        BSport={sport}
                                        BImg={img}
                                        BTitle={title}
                                        BDate={date}
                                        BNews={news}
                                        contextData={context}
                                    />
                                </div>
                            )
                        })

                    }
                </div>
            </div>
            <div className="MainBSecIndexDiv">
                <div className="FH2Div">
                    <h2 className="FHead ForUFC">Ultimate Fighting Championship</h2>
                </div>
                <div className="MainBasketBall">
                    {
                        useFilterData("UFC").slice(0, 8).map((ele, ind) => {
                            const { img, date, title, news,id,sport } = ele;
                            return (
                                <div key={ind}>
                                    <BasketballCard
                                     Bkey={id}
                                        BImg={img}
                                        BTitle={title}
                                        BDate={date}
                                        BNews={news}
                                        BSport={sport}
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
export default BUSecIndex;