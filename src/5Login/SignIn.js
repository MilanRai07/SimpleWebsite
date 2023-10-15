import { useState } from "react";
import {BsEmojiSmileFill} from 'react-icons/bs';

const SignIn = () => {
    const initialValues = { FName: "", LName: "", UName: "", Email: "", Pass: "", CPass: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const[formErrors,setFormErrors]=useState({});
    const [submit,setSubmit]=useState(false);

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    }

    const FormSubmit = (event) => {
        event.preventDefault();
        console.log('clicked')
        setFormErrors(Validate(formValues));
        setSubmit(true);
    }
    const Validate=(values)=>{
        const errrors={};
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!values.FName){
            errrors.FName="First Name is required";
        }
        if(!values.LName){
            errrors.LName="Last Name is required";
        }
        if(!values.UName){
            errrors.UName="UserName is required";
        }
        if(!values.Email){
            errrors.Email="Email is required";
        }else if(!regex.test(values.Email)){
            errrors.Email="invalid email format";
        }
        if(!values.Pass){
            errrors.Pass="PassWord is required";
        }else if(values.Pass.length < 5){
            errrors.Pass="Password must be atleast 5 letters";
        }else if(values.Pass.length > 10){
           errrors.Pass="Password must not be more than 10 letters"
        }
        if(!values.CPass){
            errrors.CPass="Password is required";
        }else if(values.Pass!==values.CPass){
            errrors.CPass="Password didn't match";
        }
        return errrors;
    }
    return (
        <> 
            <div className='FormSet'>
            {
                Object.keys(formErrors).length===0 && submit? <>
                <h2>You have been Signed</h2>
                <BsEmojiSmileFill className="emoji" style={{fontSize:"40px"}}/>
                <div>
                <button className="PButton" onClick={()=>setSubmit(false)} style={{padding:"10px"}}>Go Back</button>
                </div>
               </>:<>
                <h2>Sign Up For Free</h2>
                <form className='FormDiv' onSubmit={FormSubmit}>
                    <div className='Name'>
                        <div>
                            <input type="text"
                                placeholder="First Name"
                                name="FName"
                                value={formValues.FName}
                                onChange={handleChange} >
                            </input>
                            <p className="valid">{formErrors.FName}</p>
                        </div>

                        <div>
                            <input type="text"
                                placeholder='Last Name'
                                name="LName"
                                value={formValues.LName}
                                onChange={handleChange} >
                            </input>
                            <p className="valid">{formErrors.LName}</p>
                        </div>

                    </div>
                    <div>
                        <input type="text"
                            placeholder='UserName'
                            name="UName"
                            value={formValues.UName}
                            onChange={handleChange} >
                        </input>
                        <p className="valid">{formErrors.UName}</p>
                    </div>
                    <div>
                        <input type="email"
                            placeholder='Email'
                            name="Email"
                            value={formValues.Email}
                            onChange={handleChange}>
                        </input>
                        <p className="valid">{formErrors.Email}</p>
                    </div>
                    <div>
                        <input type="password"
                            placeholder='Password'
                            name="Pass"
                            value={formValues.Pass}
                            onChange={handleChange} >
                        </input>
                        <p className="valid">{formErrors.Pass}</p>
                    </div>
                    <div>
                        <input type="password"
                            placeholder='Check Password'
                            name="CPass"
                            value={formValues.CPass}
                            onChange={handleChange}>
                        </input>
                        <p className="valid">{formErrors.CPass}</p>
                    </div>
                    <div className='FormBtn'>
                        <button type="submit">Sign Me</button>
                    </div>
                </form>
              </>
                      
               
               }
            </div>
        </>
    )
}
export default SignIn;