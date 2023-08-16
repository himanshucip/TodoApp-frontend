
import './TodoApp.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import AuthProvider, { AuthContext } from './security/AuthContext'
import { useContext } from 'react'
import UpdateComponent from './UpdateComponent'

function AuthenticatedRoute({children}){
       const auth = useContext(AuthContext)
        if(auth.isAuthenticated){
            return children
        }
        return <Navigate to="/" />
    
}

export default function TodoApp(){
    return(
        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                     <HeaderComponent/>
                        <Routes>
                            <Route path='/' Component={LoginComponent}></Route>
                            <Route path='/welcome/:user' element= {
                            <AuthenticatedRoute>
                            <WelcomeComponent />
                            </AuthenticatedRoute>
                            }>
                            </Route>
                            <Route path='/list-todos' element={
                                <AuthenticatedRoute>
                                    <ListTodoComponent/>
                                </AuthenticatedRoute>
                            }></Route>
                            <Route path='*' element={<ErrorComponent/>}></Route>
                            <Route path='/logout' element={
                                <AuthenticatedRoute>
                                    <LogoutComponent/>
                                </AuthenticatedRoute>
                            }></Route> 

                            <Route path='/update/:id' element={
                                <AuthenticatedRoute>
                                <UpdateComponent/>
                            </AuthenticatedRoute>
                            } />
                        </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}