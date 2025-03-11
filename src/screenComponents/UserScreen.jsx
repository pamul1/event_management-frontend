import React from 'react'
import { TableUser } from '../components/TableUser'
import { FormUser } from '../components/FormUser'

export const UserScreen = () => {
  return (
    <>
        <main className='container mt-5' >
            <h1>Users</h1>
            <TableUser/>
            <FormUser/>
        </main>
    </>
  )
}