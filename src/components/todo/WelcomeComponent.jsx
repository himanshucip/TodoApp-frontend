
import {useParams, Link} from 'react-router-dom'



function WelcomeComponent(){
    //    const param = useParams()
    const {user} = useParams();
        return(
            <div className='WelcomeComponent'>
                <h1> Welcome , Hello {user}</h1>
                <div>
                    Click to manage your todos : <Link to={"/list-todos"}>go now</Link>
                </div>
            </div>
        )
    }

    export default WelcomeComponent;