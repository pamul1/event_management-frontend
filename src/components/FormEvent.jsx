import React from 'react'
import { useState } from 'react'

export const FormEvent = () => {

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "events"

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const locationHandler = (event) => {
        setLocation(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const movie = {
            title,
            date,
            location,
            email
        }

        const token = localStorage.getItem("event-credential")
        const result = await fetch(newUrl, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization' : token
            },
            body: JSON.stringify(movie)
        })

        if (result.ok) {
            const data = await result.json()

            window.location = "/eventScreen"
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
                        <label className="form-label">Title</label>
                        <input className="form-control" type="text" onChange={titleHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input className="form-control" type="date" onChange={dateHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Loacation</label>
                        <input className="form-control" type="text" onChange={locationHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" type="text" onChange={emailHandler} />
                    </div>
                    <button type='submit' className='btn btn-primary w-100' >Add</button>
                </form>
            </div>
        </>
    )
}