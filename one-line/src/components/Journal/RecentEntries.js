import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default function RecentEntries() {
    const [entries, setEntries] = useState([])


    useEffect(()=>{
        // Make a request for a user with a given ID
        axios.get('https://swapi.co/api/people/')
        .then(function (response) {
        // handle success
        console.log(response.data.results);
        setEntries(response.data.results)
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    })
        .finally(function () {
        // always executed
    });
    },[])

    return (
        <div>
            <NavLink to='/create'><button>Add New</button></NavLink>
            <NavLink to='/full'><button>Ten Year View</button></NavLink>
            <h1>Recent Entries</h1>
            {entries.map((entry, index) =>{
               return <p key={index}>{entry.name}</p>
            })}
        </div>
    )
}
