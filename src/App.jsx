import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './screenComponents/LogIn'
import { NotFound } from './components/NotFound'
import { Register } from './screenComponents/Register'
import { AttendanceScreen } from './screenComponents/AttendanceScreen'
import { EventScreen } from './screenComponents/EventScreen' 
import { Menu } from './components/Menu'


export const App = () => {

  const [isLogIn , setIsLogIn] = useState(false)

  let token = ""
  const baseUrl = import.meta.env.VITE_BASE_URL
  const endPoint = "validateSesion"

  const validateToken = async()=>{
      const newUrl = `${baseUrl}${endPoint}`
      const result = await fetch(newUrl, {
        method: "POST", 
        headers: {
            'Authorization' : token,
            'Content-Type' : 'application/json'
        }
      })

      if (result.ok) {
        setIsLogIn(true)
      }else {
        setIsLogIn(false)
      }

  }

  useEffect(()=>{

    token = window.localStorage.getItem('event-credential')
    validateToken()

  }, [])
  return (
    <>
      <BrowserRouter>
      {isLogIn ?<Menu/>: ""}
        <Routes>
          <Route path='/' element={<LogIn loginValidation={isLogIn}  />}/>
          {!isLogIn ?<Route path='/register' element={ <Register/>}/>: ""}
          {isLogIn ?<Route path='*' element={<NotFound />} />: ""}
          {isLogIn ?<Route path='/attendance/:id_event' element={ <AttendanceScreen/>}/>: ""}
          {isLogIn ?<Route path='/event' element={ <EventScreen/>}/>: ""}

        </Routes>
      </BrowserRouter>
    </>
  )
}