import { useState } from "react";

const LogIn = () => {
    const initialLog = {
        UserName: "",
        Password: ""
    }
    const [formLog, setFormLog] = useState(initialLog);
    const [issubmit, setIsSubmit] = useState(false);
    const [errorLog, setErrorLog] = useState({});
    const Changehandle = (event) => {
        const { name, value } = event.target;
        setFormLog({ ...formLog, [name]: value });
    }
    const FormLogged = (event) => {
        event.preventDefault();
        setErrorLog(ValidateLog(formLog));
        setIsSubmit(true);
    }
    const ValidateLog = (value) => {
        const errrors = {};
        if (!value.UserName) {
            errrors.UserName = "You didn't give your username";
        }
        if (!value.Password) {
            errrors.Password = "You did't give yout pasword";
        }
        return errrors;
    }
    return (
        <>
            <div className='FormSet'>
                <div className="ForCenter">
                    {Object.keys(errorLog).length === 0 && issubmit ? <>
                        <div>
                            <h2>Your Logged is being Checked</h2>
                            <div className="rotate spinner"></div>
                            </div>
                            <div>
                            <button className="PButton" onClick={()=>setIsSubmit(false)} style={{padding:"10px"}}>Go Back</button>
                            </div>
                    </>
                        : <><h2 className="LoginForm">Welcome Back Boss</h2>
                            <form className='FormDiv' style={{ marginTop: "30px" }} onSubmit={FormLogged}>
                                <div >
                                    <input type="text" placeholder='UserName' style={{ width: "300px" }}
                                        name="UserName"
                                        value={formLog.UserName}
                                        onChange={Changehandle}></input>
                                    <p className="valid">{errorLog.UserName}</p>
                                </div>
                                <div>
                                    <input type="password" placeholder='Password'
                                        name="Password"
                                        value={formLog.Password}
                                        onChange={Changehandle}>
                                    </input>
                                    <p className="valid">{errorLog.Password}</p>
                                </div>
                                <div className='FormBtn'>
                                    <button type="submit">Sign Me</button>
                                </div>
                            </form></>}
                </div>
            </div>
        </>
    )
}
export default LogIn;