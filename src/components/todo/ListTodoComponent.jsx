import { useContext, useEffect, useState } from "react";
import { callDeleteURL, callTodoURL } from "./api/TodoApiService";
import { AuthContext } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodoComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const auth = useContext(AuthContext)
    const username = auth.username;

    const navigate = useNavigate();

    // const arr =  [
    //     {id:1, description:"learn java", done:false, targetDate:targetDate},
    //     {id:2, description:"learn aws",  done:false, targetDate:targetDate},
    //     {id:3, description:"learn aptitude",  done:false, targetDate:targetDate},
    //     {id:4, description:"learn python",  done:false, targetDate:targetDate},
    //     {id:5, description:"learn nodejs",  done:false, targetDate:targetDate}

    // ]

    const [arr,setarr] = useState([])
    const [message, setmessage] = useState(null)

    // arr.map( element => element.id)
    // useEffect() hook is ues to tell react that you have to do something after rendering of component

    useEffect(
        () => retrieveTodoData(), []
    )

    function retrieveTodoData(){

        callTodoURL(username)
            .then(response => {
                console.log(response)
                setarr(response.data)
            })
            .catch((error) => console.log(error))
    }

    function deleteTodo(id){

        callDeleteURL(username,id)
            .then(
                () => {
                setmessage(`Delete of todo with ${id} successfull` )
                retrieveTodoData()
            }
            )
            .catch((error) => console.log(error))
    }

    function updateTodo(id){
        console.log("clicke update btn")
        navigate(`/update/${id}`)
    }
          
    function createNewTodo(){
        navigate('/update/-1')
    }

    return(
        <div className='container'>
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>is Done</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    { arr.map(
                            (element)=> (
                                <tr key={element.id}>
                                    <td>{element.description}</td>
                                    <td>{element.done.toString()}</td>
                                    {/* <td>{element.targetDate.toDateString()}</td> */}
                                    <td>{element.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(element.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(element.id)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table> 
            </div>
            <div className="btn btn-success m-5" onClick={createNewTodo} >Add New Todo</div>
        </div>
    )
}

export default ListTodoComponent;