import { Data } from "../Data";

//custom hook created for filtering the needed data of certaqin sport name
const useFilterData=(getName)=>{
 let filterName=getName;
  let newData=Data.filter((ele)=>{
    return ele.sport===filterName;
  })
  return newData;
}
export default useFilterData; 