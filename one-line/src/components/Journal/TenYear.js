import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePickerComponent from './DatePickerComponent';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TenYearImg from '../../img/TenYear.svg';
import Entry from './Entry';
// import BeachImg from '../../img/Beach.svg';
// import SunglassesImg from '../../img/Sunglasses.svg';


export default function TenYear(props) {
    console.log('Ten Year Props', props)
    
    const [entries, setEntries] = useState([])
    
    useEffect(() => {
        console.log('TenYear useEffect props', props)

        axios.get(`https://bw-one-line-a-day.herokuapp.com/api/users/${props.id}/posts`)
        .then((res) => {
            setEntries(res.data)
        })
        .catch((err) => {
            console.log('Error', err)
        })
        .finally(() => {
            //always executed
        })
    }, [])
    
    
    return (
        <ContainerDiv>
            <h1>One Line A Day Journal</h1>
            <img src={TenYearImg} alt='tenyearimg' />
            <div className="btn-row">
                <h1>Ten Year Page</h1>
                <DatePickerComponent />
                <NavLink to='/recent'><button>Back</button></NavLink>
            </div>
            
            {entries.map((entry, index) =>{
                return <Entry {...props} entry={entry} index={index} key={index} />
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
