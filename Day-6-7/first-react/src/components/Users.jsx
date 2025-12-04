import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                if (response.status !== 200) {
                    throw new Error("Users retrieval failed")
                }
                setUsers(response.data)
            } catch (err) {
                console.error(err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return (<p className="text-center py-8 text-gray-600">Loading...</p>)
    if (error) return (<p className="text-center py-8 text-red-600">Error: {error}</p>)

    return (
        <div className="max-w-3xl mx-auto my-6 p-6 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-md font-sans">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-none m-0 p-0">
                {users.map(u => (
                    <li
                        key={u.id}
                        className="bg-white border border-gray-200 p-3 rounded-md text-slate-800 font-semibold shadow-sm transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    >
                        {u.username}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users