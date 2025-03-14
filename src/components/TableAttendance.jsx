import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const TableAttendance = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "attendance"
    const [attendance, setAttendance] = useState([])
    const { id_event} = useParams()

    const getAttendance = async () => {

        const url = `${baseUrl}${endPoint}/${id_event}`
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

  
    const handleDelete = async (id) => {
        const url = `${baseUrl}${endPoint}/${id}`
        const token = localStorage.getItem("event-credential")
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
                        <th>Name</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attendance.map((item) => (
                            <tr key={item.id}>
                                <td>{item.attendee_name}</td>
                                <td>{item.attendance_date}</td>
                                <td> <button className='btn btn-danger' onClick={() => {
                                    handleDelete(item.id)
                                }} >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}