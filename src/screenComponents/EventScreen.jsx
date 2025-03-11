import React from 'react'
import { TableEvent } from '../components/TableEvent'
import { FormEvent } from '../components/FormEvent'

export const EventScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Events</h1>
            <TableEvent/>
            <FormEvent/>
            
        </main>
    </>
  )
}