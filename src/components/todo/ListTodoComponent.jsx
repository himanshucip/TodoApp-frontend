function ListTodoComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const arr =  [
        {id:1, description:"learn java", done:false, targetDate:targetDate},
        {id:2, description:"learn aws",  done:false, targetDate:targetDate},
        {id:3, description:"learn aptitude",  done:false, targetDate:targetDate},
        {id:4, description:"learn python",  done:false, targetDate:targetDate},
        {id:5, description:"learn nodejs",  done:false, targetDate:targetDate}

    ]

    arr.map( element => element.id)
                    

    return(
        <div className='container'>
            <h1>Things you want to do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    { arr.map(
                            (element)=> (
                                <tr key={element.id}>
                                    <td>{element.id}</td>
                                    <td>{element.description}</td>
                                    <td>{element.done.toString()}</td>
                                    <td>{element.targetDate.toDateString()}</td>
                                </tr>
                            )


                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodoComponent;