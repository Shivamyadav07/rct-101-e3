import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
    let {Auth,handleAuth}=useContext(AuthContext);
    const navigate=useNavigate();
    function handleonclick()
    {
        handleAuth(!Auth)
        navigate("/")
    }
  return (
    <div>
        <input type="email" placeholder='enter email' />
        <input type="password" placeholder='enter password' />
        <button onClick={handleonclick} >Login</button>
    </div>
  )
}
