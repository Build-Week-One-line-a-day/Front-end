import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import notesImage from '../../DesignFiles/notes1.svg'
import Entry from './Entry'

export default function RecentEntries(props) {
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
            <h1>Recent Entries</h1>
            <img alt='notes' src={notesImage} alt='notes'/>
            <div className="btn-row">
                <NavLink to='/create'><button>Add New</button></NavLink>
                <NavLink to='/full'><button>Ten Year View</button></NavLink>
            </div>
           
            
            {entries.map((entry, index) =>{
               return <Entry {...props} entry={entry} index={index} key={index}/>
               
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
        width: 150px;
        padding: 2rem;
    }
    h1{
        font-family: 'Amatic SC',cursive;
        font-size: 3rem;
        margin-bottom: 0;
    }
    .button-row {
        display: flex;
    }
    button{
        color: #fff;
        background-color:#ba2545;
        margin: 10px;
        padding: 12px 12px;
        cursor: pointer;
        border: 0 none;
        border-radius: 4px;
        text-transform: uppercase;
    }
    button:hover{
        transition: all 150ms linear;
        opacity: .85;
    }
`
