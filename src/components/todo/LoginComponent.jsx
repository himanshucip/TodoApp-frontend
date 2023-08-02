import { useState } from 'react'
import { useNavigate} from 'react-router-dom'



function LoginComponent(){
    const[username, setUsername] = useState("");
    const[password, setPass] = useState("");
    const[success, setSuccess] = useState(false);
    const[error, setError] = useState(false);
   const navigate = useNavigate();

    function handleUser(event){
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    function handlePass(event){
        console.log(event.target.value);
        setPass(event.target.value);
    }

    function handleSubmit(){
        if(username === "himanshu" && password === "123"){
            setSuccess(true);
            setError(false);
            navigate(`/welcome/${username}`);
        }
        else{
            setSuccess(false);
            setError(true);
        }
    }


    // function SuccessMsgComponent(){
    //     if(success)
    //     return(
    //         <>
    //         <div className='successMsg'>login done</div>
    //         </>
    //     )

    //     return null;
    // }

    // function ErrorMsgComponent(){
    //     if(error)
    //     return(
    //         <>
    //        <div className='errorMsg'>login error</div>
    //         </>
    //     )

    //     return null;
    // }

    return(
        <div className="login">
            {success && <div className='successMsg'>login done</div>}
            {error && <div className='errorMsg'>login error</div>}
            <div>
                <label>Username : </label>
                <input type="text" name="user" value={username} onChange={handleUser}></input>
            </div>

            <div>
                <label>Password : </label>
                <input type="password" name="pass" value={password} onChange={handlePass}></input>
            </div>
            <div>
               <button type="submit" name="login-btn" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default LoginComponent;