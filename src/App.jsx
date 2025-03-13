import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './screenComponents/LogIn'
import { NotFound } from './components/NotFound'
import { Register } from './screenComponents/Register'
import { AttendanceScreen } from './screenComponents/AttendanceScreen'
import { EventScreen } from './screenComponents/EventScreen' 


export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/register' element={ <Register/>}/>
          <Route path='*' element={<NotFound />} />
          <Route path='/attendance/:id_event' element={ <AttendanceScreen/>}/>
          <Route path='/event' element={ <EventScreen/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}