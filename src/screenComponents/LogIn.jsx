import React from 'react'
import { LogInForm } from '../components/FormLogIn'
import { useNavigate } from 'react-router-dom'

export const LogIn = ({loginValidation, changeLogInState}) => {
  
  const navigate = useNavigate()

  if(loginValidation){
    navigate("/event")
  }
  
  return (
    
    <>
        <LogInForm changeLogInState={changeLogInState}/>
    </>
  )
}