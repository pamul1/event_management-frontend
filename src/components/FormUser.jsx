import React from 'react'
import { useState } from 'react'

export const FormUser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const baseUrl = import.meta.env.VITE_BASE_URL
    const endPoint = "users"

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const newUrl = `${baseUrl}${endPoint}`

        const actor = {
            name,
            email,
            password
        }

        const token = localStorage.getItem("event-credential")
        const result = await fetch(newUrl, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': token
            },
            body: JSON.stringify(actor)
        })

        if (result.ok) {
            const data = await result.json()

            window.location = "/userScreen"
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
                        <label className="form-label">Email</label>
                        <input className="form-control" type="texy" onChange={emailHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="password" onChange={passwordHandler} />
                    </div>
                    <button type='submit' className='btn btn-primary w-100' >Add</button>
                </form>
            </div>
        </>
    )
}