import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default function Entry(props) {
    console.log("entry props", props)
    const id = props.index;
    return (
        <ContainerDiv>
            <NavLink to={`/edit/${id}`}>
                <button>06/06</button>
            </NavLink>
            <div className="text-content">
                <h2>{props.entry.name}</h2>
                <p>Lorem ipsum dolor amet wolf ramps unicorn, gluten-free four loko everyday carry waistcoat biodiesel meggings drinking vinegar lo-fi slow-carb chia lyft flannel. Bicycle rights everyday carry tattooed, banjo chambray cred street art gluten-free tilde you probably haven't heard of them hammock. Hot chicken prism crucifix farm-to-table shaman tattooed. Copper mug art party +1 lo-fi tbh microdosing. </p>
            </div>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    border: .5px solid darkgray;
    width: 400px;
    margin: 2px auto;
    padding-right: 2.5%;
    border-radius: 5px;
    

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
        width: 80%;
        font-size: .9rem;
        margin-top: 20px;
    }
    a button:hover{
        transition: all 150ms linear;
        opacity: .85;
    }

    .text-content {
        text-align: left;
        margin-left: 4%;
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
