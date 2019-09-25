import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import notesImage from '../../DesignFiles/notes1.svg'
import Entry from './Entry'

export default function RecentEntries(props) {
    console.log('recent entries props', props)
    

    const [entries, setEntries] = useState([])
    
    

    useEffect(()=>{
        console.log('recent entries props', props)
        // Make a request for a user with a given ID
        axios.get(`https://bw-one-line-a-day.herokuapp.com/api/users/${props.id}/posts`)
        .then(function (response) {
        // handle success
        console.log(response.data);
        setEntries(response.data)
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
            <h1>One Line A Day Journal</h1>
            <img alt='notes' src={notesImage} alt='notes'/>
            <div className="btn-row">
            <h1>Recent Entries</h1>
                <NavLink to='/create'><button>Add New</button></NavLink>
                <NavLink to='/full'><button>Ten Year View</button></NavLink>
            </div>
           
            
            {entries.map((entry, index) =>{
               return <Entry {...props} setEntries={setEntries} entry={entry} index={index} key={index}/>
            })}
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    max-width: 800px;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
        padding: 0 .5rem;
      }

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

    .btn-row {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            color: #fff;
            background-color: #ba2545;
            padding: 12px 12px;
            cursor: pointer;
            border: 0 none;
            border-radius: 4px;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 800;
            

            @media only screen and (max-width: 600px) {
                margin-left: 0px;
              }
        }
        button:hover{
            transition: all 150ms linear;
            opacity: .85;
        }

        h1{
            font-size: 2em;
            font-family: 'Amatic SC',cursive;
        }
    }
`
