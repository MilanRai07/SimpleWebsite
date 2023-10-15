import { Data } from "../Data";

//custom hook created for filtering the needed data of certaqin sport name
const useDoubleFilterData=(getSport,getCategory)=>{
 let filterName=getSport;
 let category=getCategory;
  let newData=Data.filter((ele)=>{
    return ele.sport===filterName;
  })
  let finalData=newData.filter((ele)=>{
    return ele.category===category;
  })
  return finalData;
}
export default useDoubleFilterData; 