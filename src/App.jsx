import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './screenComponents/LogIn'
import { NotFound } from './components/NotFound'
import { Register } from './screenComponents/Register'
import { AttendanceScreen } from './screenComponents/AttendanceScreen'
import { EventScreen } from './screenComponents/EventScreen' 
import { Menu } from './components/Menu'


export const App = () => {

  const [isLogIn , setIsLogIn] = useState(false)
  const [token, setToken] = useState(window.localStorage.getItem('event-credential'))

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
    validateToken()
  }, [])
  
  return (
    <>
      <HashRouter>
      {isLogIn ?<Menu/>: ""}
        <Routes>
          <Route path='/' element={<LogIn loginValidation={isLogIn} changeLogInState={setToken}  />}/>
          {!isLogIn ?<Route path='/register' element={ <Register/>}/>: ""}
          {isLogIn ?<Route path='*' element={<NotFound />} />: ""}
          {isLogIn ?<Route path='/attendance/:id_event' element={ <AttendanceScreen/>}/>: ""}
          {isLogIn ?<Route path='/event' element={ <EventScreen/>}/>: ""}

        </Routes>
      </HashRouter>
    </>
  )
}