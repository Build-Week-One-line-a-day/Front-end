import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import DatePickerComponent from './DatePickerComponent';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TenYearImg from '../../img/TenYear.svg';
import Entry from './Entry';
// import BeachImg from '../../img/Beach.svg';
// import SunglassesImg from '../../img/Sunglasses.svg';


export default function TenYear(props) {
    console.log('Ten Year Props', props)
    
    const [date, setDate] = useState('');
    // const [entries, setEntries] = useState([])
    const [masterEntries, setMasterEntries] = useState();

    // let masterEntries;

    useEffect(() => {
        setMasterEntries(props.entries)
        console.log('masterEntries', masterEntries)
    }, [])

    function tenYearFormat(event){
        console.log('second master entries', masterEntries)
        const tenYearEntries = masterEntries.filter((entry) => {
            let formattedDate = entry.created_at.split(" ")
            console.log('formatted date', formattedDate)
            return formattedDate[0] == event.target.value 
        })
       props.setEntries(tenYearEntries) 
    }

    
    return (
        <ContainerDiv>
            <h1>One Line A Day Journal</h1>
            <img src={TenYearImg} alt='tenyearimg' />
            <div className="btn-row">
                <h1>Ten Year Page</h1>
                {/* <DatePickerComponent /> */}
                <input onChange={tenYearFormat} type={"date"}/>
                <NavLink to='/recent'>
                    <button>Back</button>
                </NavLink>
            </div>
            
            {props.entries.map((entry, index) =>{
                return <Entry {...props} setEntries={props.setEntries} entries={props.entries} entry={entry} index={index} key={index} />
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
