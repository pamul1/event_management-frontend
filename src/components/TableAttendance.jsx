import React from 'react'
import { useEffect, useState } from 'react'

export const TableAttendance = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "attendance"
    const [attendance, setAttendance] = useState([])

    const getAttendance = async () => {

        const url = `${baseUrl}${endPoint}`
        const token = localStorage.getItem("event-credential");
        const result = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': token
            }

        })
        const data = await result.json()
        setAttendance(data)
    }

    const token = localStorage.getItem("event-credential")
    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const result = await fetch(url, {
            method: "DELETE",
            headers:{
                'Authorization': token
            }
        })
        if (result.ok) {
            const data = await result.json()
            getAttendance()
        } else {
            const data = await result.json()
            console.log(data)
            console.log("Something went wrong")
        }


    }

    useEffect(() => {
        getAttendance()
    }, [])

    return (
        <>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Event_id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attendance.map((item) => (
                            <tr key={item.attendance_id}>
                                <td>{item.event_id}</td>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td> <button className='btn btn-danger' onClick={() => {
                                    handleDelete(item.attendance_id)
                                }} >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}