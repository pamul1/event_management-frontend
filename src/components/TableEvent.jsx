import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TableEvent = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "event"
    const [event, setEvent] = useState([])

    const navigate = useNavigate()

    const getEvent = async () => {
        const email = localStorage.getItem("event-email")
        const token = localStorage.getItem("event-credential")
        const url = `${baseUrl}${endPoint}/${email}`
        const result = await fetch(url,
            {
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization' : token
                }
            }
        )

        if (result.ok) {
            const data = await result.json()
            setEvent(data)
        } else {
            const err = await result.json()
            console.log("Error Fetching Event")
            console.log(err)
        }

    }

    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const token = localStorage.getItem("event-credential")
        const result = await fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': token
            }
        })
        getEvent()
    }

    const goToAttendance = (id) => {
        navigate(`/attendance/${id}`)
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        <>
            <div className='table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            event.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.date}</td>
                                    <td>{item.location}</td>
                                    <td> <button className='btn btn-danger' onClick={() => {
                                        handleDelete(item.id)
                                    }} >-</button>
                                    <button className='btn btn-warning' onClick={() => {
                                        goToAttendance(item.id)
                                    }} >+</button>
                                    </td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}