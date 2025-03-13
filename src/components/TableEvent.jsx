import React from 'react'
import { useEffect, useState } from 'react'

export const TableEvent = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "events"
    const [event, setEvent] = useState([])

    const getEvent = async () => {
        const email = localStorage.getItem("event-email")
        const token = localStorage.getItem("event-credential")
        const url = `${baseUrl}${endPoint}/${email}`
        const result = await fetch(url)

        if (result.ok) {
            const data = await result.json()
            setEvent(data)
        } else {
            const err = await result.json()
            console.log("Error Fetching Event")
            console.log(err)
        }

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

        getEvent()
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
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            event.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.date}</td>
                                    <td>{item.location}</td>
                                    <td>{item.email}</td>
                                    <td> <button className='btn btn-danger' onClick={() => {
                                        handleDelete(item.event_id)
                                    }} >Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}