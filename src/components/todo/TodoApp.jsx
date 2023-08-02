
import './TodoApp.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'

export default function TodoApp(){
    return(
        <div className='TodoApp'>
       <BrowserRouter>
       <HeaderComponent/>
       <Routes>
        <Route path='/' Component={LoginComponent}></Route>
        <Route path='/welcome/:user' Component={WelcomeComponent}></Route>
        <Route path='/list-todos' Component={ListTodoComponent}></Route>
        <Route path='*' Component={ErrorComponent}></Route>
        <Route path='/logout' Component={LogoutComponent}></Route> 
       </Routes>
       <FooterComponent/>
       </BrowserRouter>
        </div>
    )
}