import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const FormAttendance = () => {

    const { id_event } = useParams()
    const [event_id, setEvent_id] = useState(id_event)
    const [name, setName] = useState("")
    const [date, setDate] = useState("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "attendance"

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const attendance = {
            event_id,
            name,
            date
        }
console.log(attendance)
console.log(newUrl)

        const token = localStorage.getItem("event-credential")
        const result = await fetch(newUrl, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': token
            },
            body: JSON.stringify(attendance)
        })
 console.log(result)
        if (result.ok) {
            const data = await result.json()

            console.log(data)
           // window.location = "/attendance/" + id_event
        }
        else {
            const data = await result.json()
            console.log(data)

        }
    }

    return (
        <>
            <div className="card p-3 mb-5">
                <form onSubmit={submitHandler}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control" type="text" onChange={nameHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input className="form-control" type="date" onChange={dateHandler} />
                    </div>
                    <button type='submit' className='btn btn-primary w-100' >Add</button>
                </form>
            </div>
        </>
    )
}