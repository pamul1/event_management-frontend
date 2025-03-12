import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormRegister } from './components/FormRegister'
import { FormLogIn } from './components/FormLogIn'
import { NotFound } from './components/NotFound'

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/register' element={<FormRegister />} />
          <Route path='/login' element={<FormLogIn/>}/>
          <Route path='/' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}