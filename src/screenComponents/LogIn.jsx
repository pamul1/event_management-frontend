import React from 'react'
import { LogInForm } from '../components/FormLogIn'

export const LogIn = ({isLogIn}) => {
  
  if(isLogIn){
    window.location.href = "/event"
  }
  
  return (
    
    <>

        <LogInForm/>
    </>
  )
}