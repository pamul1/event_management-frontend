import React from 'react'
import { LogInForm } from '../components/FormLogIn'

export const LogIn = ({loginValidation}) => {
  
  if(loginValidation){
    window.location.href = "#/event"
  }
  
  return (
    
    <>
        <LogInForm/>
    </>
  )
}