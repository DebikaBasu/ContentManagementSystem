import React from 'react'
import Login from '../components/Login'
const LoginPage = ({isLogged, setIsLogged}) => {
  return (
    <div>
        <Login setIsLogged={setIsLogged}></Login>
    </div>
  )
}

export default LoginPage;