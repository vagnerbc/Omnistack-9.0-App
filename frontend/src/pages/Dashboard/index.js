import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Dashboard() {

    const [spots, setSposts] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');

            const response = api.get('/dashboard', {
                headers: { user_id }
            })

            setSposts(response.data);
        }
    }, [])

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header />
                        <strong>{spot.company}</strong>
                        <span>{spot.price}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
