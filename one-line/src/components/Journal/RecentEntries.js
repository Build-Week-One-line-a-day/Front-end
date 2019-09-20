import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

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
        <>
            <NavLink to='/create'><Button primary>Add New</Button></NavLink>
            <NavLink to='/full'><Button>Ten Year View</Button></NavLink>
            <h1>Recent Entries</h1>
            {entries.map((entry, index) =>{
               return <Card key={index}>
                        <Card.Content>{entry.name}</Card.Content>
                    </Card> 
               
            })}
        </>
    )
}
