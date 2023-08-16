import { useNavigate, useParams } from "react-router-dom"
import { callPostMethod, callPutMethod, callUpdateAPI } from "./api/TodoApiService"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./security/AuthContext"
import {Formik, Field, Form, ErrorMessage} from 'formik'
import moment from 'moment'

export default function UpdateComponent(){

    const {id} = useParams()
    const auth = useContext(AuthContext)
    const username = auth.username
    useEffect( () => retrieveTodo() , [])
    const [description, setdescription] = useState("")
    const [targetDate, settargetDate] = useState("")
    const navigate = useNavigate()

    function retrieveTodo(){
        if(id != -1){
        callUpdateAPI(username, id)
            .then(
                response => {
                    console.log(response.data)
                    setdescription(response.data.description)
                    settargetDate(response.data.targetDate)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    }

    function onSubmit(values){
        console.log(values)
       const todo_obj ={
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        if(id === -1){
            callPostMethod(username, todo_obj)
            .then( () => {
                navigate('/list-todos')
            })
            .catch( error => console.log(error))
        }
        else{
            callPutMethod(username,id,todo_obj)
            .then( () => {
                navigate('/list-todos')
            })
            .catch( (error) => console.log(error))
        }
        
    }

    function validate(values){
        let errors = {

        }

        if(values.description.length < 5){
            errors.description = "Enter atleast five char"
        }

        if(values.targetDate == null || values.targetDate =='' || !moment(values.targetDate).isValid() ){
            errors.targetDate = "Enter Target Date"
        }

        return errors
    }

    return(
        <div className="container">
            <h1> Enter Todo Details</h1>
            <div>
                <Formik initialValues={ {description, targetDate}} enableReinitialize={true}
                 onSubmit={onSubmit} validate={validate} validateOnBlur={false} validateOnChange={false}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage 
                                    name="description"
                                    component= "div"
                                    className="alert alert-warning"
                                />

                                <ErrorMessage 
                                    name="targetDate"
                                    component= "div"
                                    className="alert alert-warning"
                                />

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" name="description" className="form-control" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>TargetDate</label>
                                    <Field type="date" name="targetDate" className="form-control"/>
                                </fieldset>
                                <div> <button className="btn btn-success m-3" type="submit">Update</button></div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}