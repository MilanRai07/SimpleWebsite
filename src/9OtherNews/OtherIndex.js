import { useEffect,useState } from "react";

const OtherIndex=()=>{
    const [NData,setNData]=useState();
    useEffect(()=>{
        const callAPI=async()=>{
        try{
         let url='https://dummyjson.com/products';
           let res= await fetch(url);
           if(!res.ok){
            throw Error(res.status)
           }
           console.log(res);

           let data=await res.json();
           console.log(data);
           if(typeof(data)==="string"){
            data=JSON.parse(data);
        }
        setNData(data);
        console.log(NData);
        }catch{

        }
      }
callAPI();
    },[])
 return(
    <>
    <div>
        this is for API Calling
    </div>
    </>
 )
}
export default OtherIndex;