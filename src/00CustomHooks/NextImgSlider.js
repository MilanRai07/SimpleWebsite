const useNextSlide=(newCurrent,newLength)=>{
    if(newCurrent===newLength-1){
        newCurrent=0;
    }else{
       newCurrent=newCurrent+1;
    }
    return newCurrent;
}
export default useNextSlide;