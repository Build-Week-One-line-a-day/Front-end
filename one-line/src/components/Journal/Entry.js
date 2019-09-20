import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default function Entry(props) {
    console.log(props)
    
    return (
        <ContainerDiv>
            <NavLink to='/edit'>
                <button>06/06</button>
            </NavLink>
            <div>
                <p>{props.entry.name}</p>
                <p>Lorem ipsum dolor amet wolf ramps unicorn, gluten-free four loko everyday carry waistcoat biodiesel meggings drinking vinegar lo-fi slow-carb chia lyft flannel. Bicycle rights everyday carry tattooed, banjo chambray cred street art gluten-free tilde you probably haven't heard of them hammock. Hot chicken prism crucifix farm-to-table shaman tattooed. Copper mug art party +1 lo-fi tbh microdosing. </p>
            </div>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid gray;
    width: 400px;
    margin: 1.5px auto;
    padding-right: 2.5%;
    

    a button{
        color: #fff;
        background: cornflowerblue;
        padding: 6px 6px;
        cursor: pointer;
        border: 0 none;
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: bold;
    }
    a button:hover{
        transition: all 150ms linear;
        opacity: .85;
    }
   
`
