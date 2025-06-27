import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'
import HomeImage from '../../img/HomeImage.svg'

export default function LoginSignup() {
    return (
        <ContainerDiv>
            <h1><span className="yellow">One Line A Day</span><span className="blue"> Journal</span></h1>
            <div className="button-img-container">
            <img width={600} src={HomeImage} alt="Girl pointing to phone" />
            <div className="button-section">
                <NavLink to='user-register'><button className="loginButtons">Sign Up</button></NavLink>
                <NavLink to='user-login'><button className="loginButtons">Log In</button></NavLink>
            </div>
            </div>
        </ContainerDiv>
    )
}



const ContainerDiv = styled.div`
    font-family: 'Amatic SC', cursive;

    background: #cf0732;
    background-image: url(https://www.transparenttextures.com/patterns/notebook.png);
    border-bottom-left-radius: 55rem;
    border-bottom-right-radius: 55rem;
    border-bottom: 2px solid #edc71c;

    h1 {
        font-size: 5rem;
        .yellow{
            color: #ebbd36
        }
        .blue{
            color: #47cbe6;
        }
    }

    .button-img-container {
        display: flex;
        justify-content: center;

        img {
            @media only screen and (max-width: 600px) {
                width: 90%;
            }
        }
    }
    .button-section {
        display: flex;
        flex-direction: column;
        position: absolute;
        padding-top: 182px;
        left: 63%;

        @media only screen and (max-width: 600px) {
            padding-top: 21%;
            left: 68%;
          }

        button {
            letter-spacing: 2px;
            // font-family: "Jua", sans-serif;
            font-weight: 800;
            width: 96px;
            height: 52px;
            border-radius: 27px;
            margin-bottom: 15px;
            font-size: 1rem;
            border: 0;
        }
    }


`;