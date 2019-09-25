import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import axios from 'axios';

export default function Entry(props) {
    console.log("entry props", props)
    const index = props.index;


    const deletePost = () => {
        // Make a request for a user with a given ID
        axios.delete(`https://bw-one-line-a-day.herokuapp.com/api/users/posts/${props.entry.id}`)
        .then(function (response) {
        // handle success
        console.log(response);
        props.history.push('/recent')
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    return (
        <ContainerDiv>
            <NavLink to={`/edit/${index}`}>
                <button>{props.entry.created_at}</button>
            </NavLink>
            <div className="text-content">
                <div className="text-content-title">
                    <h2>{props.entry.title}</h2>
                    <button onClick={deletePost}>trash</button>
                </div>
                
                <p>{props.entry.contents}</p>
            </div>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    border: .5px solid darkgray;
    margin: 7.5px auto;
    padding-right: 2.5%;
    border-radius: 5px;
    width: 75%;

    @media only screen and (max-width: 600px) {
        width: 95%;
        margin: 0 auto;
        margin-bottom: 15px;
      }
    

    a button{
        color: #fff;
        background: #47CBE6;
        padding: 6px 6px;
        cursor: pointer;
        border: 0 none;
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: bold;
        height: 30px;
        width: 100%;
        font-size: .9rem;
        margin-top: 20px;
        margin-left: 20%;

        
    }
    a button:hover{
        transition: all 150ms linear;
        opacity: .85;
    }

    .text-content {
        text-align: left;
        margin-left: 4%;

        @media only screen and (max-width: 600px) {
            margin-left: 7%;
          }

        .text-content-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            button{
                border: 1px solid red;
            } 
        }   
    }


    h2 {
        font-family: 'Amatic SC',cursive;
        font-size: 2rem;
        margin-top: 15px;
    }

    p {
        font-family: 'Poiret One',cursive;
        font-weight: 600;
    }
   
`
