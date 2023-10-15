import './BUSec.css';
const BasketballCard=(props)=>{
    const { BImg,BTitle,BDate,Bkey,contextData,BSport } = props;
    return (
        <>
           <div className='BasketballCard'> 
               <div className= "BasketImgDiv">
                <img src={BImg} className='BasketImg Fimg' alt={BTitle}></img>
               </div> 
               <div className='BasketContent'>
                  <h3 className='BTitle'>{BTitle <= BTitle.slice(0, 50) ? BTitle : BTitle.slice(0, 50) + "..."}</h3>
                  <p className='FDate BDate'>{BDate}</p>
                  <button className='BasketBtn FButton' onClick={()=>contextData.routeChange(BSport,Bkey)}>Read More</button>
               </div>
           </div>
        </>
    )
}
export default BasketballCard;
