const usePrevSlide=(newCurrent,newLength)=>{
    if(newCurrent===0){
        newCurrent=newLength-1;
    }else{
       newCurrent=newCurrent-1;
    }
    return newCurrent;
}
export default usePrevSlide;