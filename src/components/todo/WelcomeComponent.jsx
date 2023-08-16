
import {useParams, Link} from 'react-router-dom'
import { AuthContext} from "./security/AuthContext";
import { useContext } from "react";
// import axios from 'axios'
import { retrieveData, retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';



function WelcomeComponent(){
    //    const param = useParams()
    const {user} = useParams();
    const auth = useContext(AuthContext);
    const token = auth.token

    function callHelloWorld(){
    
        //axios
        retrieveHelloWorldPathVariable(user,token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean"))
    }


        function successfulResponse(response){
                console.log("good")
        }

        function errorResponse(error){
            console.log("bad")
        }

        
        return(
            <div className='WelcomeComponent'>
                <h1> Welcome , Hello {user}</h1>
                <div>
                    Click to manage your todos : <Link to={"/list-todos"}>go now</Link>
                </div>
                <div>
                    <button className='btn btn-success m-5' onClick={callHelloWorld}>call hello rest API</button>
                </div>

            </div>
        )
    }

    export default WelcomeComponent;