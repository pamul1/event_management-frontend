import React from 'react'
import { TableAttendance } from '../components/TableAttendance'
import { FormAttendance } from '../components/FormAttendance'

export const AttendanceScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Attendances</h1>
            <TableAttendance/>
            <FormAttendance/>
            
        </main>
    </>
  )
}