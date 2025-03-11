import React from 'react'
import { useEffect, useState } from 'react'

export const TableUser = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "users"
    const [user, setUser] = useState([])

    const getUser = async () => {

        const token = localStorage.getItem("event-credential")
        const url = `${baseUrl}${endPoint}`
        const result = await fetch(url)
        const data = await result.json()
        setUser(data)
    }

    const token = localStorage.getItem("event-credential")
    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': token
            }
        })
    
        getUser()
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actor.map((item) => (
                            <tr key={item.user_id}>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.passord}</td>
                                <td> <button className='btn btn-danger' onClick={ ()=>{
                                    handleDelete(item.user_id)
                                }  } >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}