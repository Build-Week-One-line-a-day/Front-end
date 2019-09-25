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
            <div className ="header-and-back">
                <h1>One Line A Day Journal</h1>
                <img width={150} src={TenYearImg} />
                <NavLink to='/recent'><button>Back</button></NavLink>
            </div>
            
            <div className="title-and-date">
                <h1>Ten Year Page</h1>
                <DatePickerComponent />
            </div>
            
            {entries.map((entry, index) =>{
                return <Entry {...props} entry={entry} index={index} key={index} />
            })}

        </ContainerDiv>
    )
}



const ContainerDiv = styled.div`
    font-family: 'Amatic SC',cursive;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .header-and-back {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h1 {
            
            font-size: 3rem;
        }

        a {
            button {
                color: #fff;
                background-color: #ba2545;
                margin: 10px;
                padding: 12px 12px;
                cursor: pointer;
                border: 0 none;
                border-radius: 4px;
                text-transform: uppercase;
                width: 90px;
                font-size: 1rem;
                font-weight: 800;
                // font-family: 'Poiret One',cursive;
                margin-left: 70px;
            }
        }
    }

    img {

    }

    .title-date-entry {
        // position: absolute;
        // top: 40%;
        // left: 2%;
        width: 70%;
        // margin-top: 10px;
        
        .title-and-date {
            display: flex;
            flex-direction: row;

            .react-datepicker-wrapper {
                padding-left: 30px;
                margin-top: 34px;
            }
        }

        .entry-content {
            display: grid;
            flex-direction: column;
            align-items: center;
            grid-template-columns: 1fr;
            width: 90%;
            // margin-left: 107px;
            // margin: 0 auto;

            .single-entry {
                display: grid;
                grid-template-columns: 85px 1fr;
                text-align: left;




                // display: flex;
                // align-items: center;
                width: 68%;
                background-color: #fff;
                margin-bottom: 25px;
                padding: 15px;
                // border: 5px solid #3F3D56;
                // border-radius: 40px;
                flex-direction: column;
                margin-right: 21px;

                border: .5px solid darkgray;
                border-radius: 5px;

                button {
                    color: #fff;
                    background: #47CBE6;
                    padding: 6px 6px;
                    cursor: pointer;
                    border: 0 none;
                    border-radius: 3px;
                    text-transform: uppercase;
                    font-weight: bold;
                    height: 30px;
                    width: 65%;
                    font-size: 1rem;
                    margin-top: 10px;
                }

                .text {
                    // padding-left: 3%;
                    width: 100%;

                    h2 {
                        font-size: 2.5rem;
                        margin-bottom: 0px;
                        margin-top: 0px;
                    }

                    p {
                        font-family: 'Poiret One',cursive;
                        font-weight: 600;
                        font-size: 1.2rem;
                        margin-top: 9px;
                    }
                }
            }

            
        }

           

     
`;