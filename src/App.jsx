import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './screenComponents/LogIn'
import { NotFound } from './components/NotFound'
import { Register } from './screenComponents/Register'
import { AttendanceScreen } from './screenComponents/AttendanceScreen'

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/register' element={ <Register/>}  />
          <Route path='*' element={<NotFound />} />
          <Route path='/attendance' element={ <AttendanceScreen/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}