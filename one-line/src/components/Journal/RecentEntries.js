import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import notes1 from '../../DesignFiles/notes1.svg'

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
        <ContainerDiv>
            <img width={100} alt='notes' src={notes1}/>
            <div class="btn-row">
                <NavLink to='/create'><button primary>Add New</button></NavLink>
                <NavLink to='/full'><button>Ten Year View</button></NavLink>
            </div>
           
            <h1>Recent Entries</h1>
            {entries.map((entry, index) =>{
               return <div key={index}>
                        <p>06/06</p>
                        <p>{entry.name}</p>
                    </div> 
               
            })}
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    img{
        margin: 0 auto;
    }
    h1{
        font-family: 'Amatic SC',cursive;
        font-size: 3rem;
    }
    .button-row {
        display: flex;
    }
`
