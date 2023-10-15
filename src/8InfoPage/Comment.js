import { useState } from "react";

const Comment = () => {
    const [fit,setFit]=useState();
    const [comments,setComments]=useState([]);
    const [editIndex,setEditIndex]=useState(null);
    const [buttonHide,setButtonHide]=useState(true);
  

  
    const handleEvent=(event)=>{
       setFit(event.target.value);   
    }
    const Add=()=>{
      let getDate=new Date();
      let year=getDate.getFullYear();
      let month=getDate.getMonth();
      let day=getDate.getDate();
      let timeof=getDate.toLocaleTimeString();
      let forId=`${year}/${month+1}/${day} ${timeof}`;

        if(!fit){

        }else{
            setComments((comments)=>{
                return [...comments,{id:forId,view:fit}]
            })
        }
     
      setFit("");
      
    }
    // new Date().getSeconds().toString()
    const Delete=(index)=>{
       const AfterDel=comments.filter((ele)=>{
           return ele.id!==index;
       })
       setComments(AfterDel);
    }
    const Edit=(index)=>{
       const indexData=comments.find((ele)=>{
        return ele.id===index;
       })
       setEditIndex(indexData.id);
       setButtonHide(false);
       setFit(indexData.view);
    }
    const EditDone=()=>{
        const newComment=comments.map((ele)=>{
            
         if(ele.id===editIndex){
            return{
             ...ele,view:fit
            }
         }
         return ele;
         })
        setComments(newComment);
        setFit("");
        setButtonHide(true);
    }
    return (
        <>
            <div>
                <div className="FH2Div" style={{ marginTop: "20px" }}>
                    <h2 className="FHead"> Public Views</h2>
                </div>
                <div className="InputBtnCont">
              <input type="text" className="CommentInput" placeholder="write your views"
              name="CName"
              value={fit}
              onChange={handleEvent}
              ></input>
              {buttonHide?
                <button onClick={Add} className="AddCommentBtn">Add</button>
                :
                <button onClick={EditDone} className="AddCommentBtn">Edit</button>
              }
              </div>
              <div className="CommentView">
                {
                    comments.map((ele,ind)=>{
                      return(
                       <div key={ind} className="ComCard">
                       <div className="Commentor">
                       <div>
                       <h3 style={{marginBottom:"5px",color:"#0D8F4F"}}>User Boss</h3>
                       </div>
                       <div>
                       <h4 style={{color:"#0D8F4F"}}>{ele.id}</h4>
                       </div>
                       </div>
                            <p style={{textAlign:"justify"}}>{ele.view}</p>
                            <div className="EDel">
                            <p onClick={()=>Edit(ele.id)}>Edit</p>
                            <p onClick={()=>Delete(ele.id)}>Delete</p>
                            </div>
                            </div>
                      )
                    })
                }
              </div>
              
            </div>
        </>
    )
}
export default Comment;