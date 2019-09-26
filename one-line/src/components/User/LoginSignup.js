import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'
import HomeImage from '../../img/HomeImage.svg'

export default function LoginSignup() {
    return (
        <ContainerDiv>
            <h1>One Line A Day Journal</h1>
            <div className="button-img-container">
            <img width={600} src={HomeImage} alt="Girl pointing to phone" />
            <div className="button-section">
                <NavLink to='user-register'><button>Sign Up</button></NavLink>
                <NavLink to='user-login'><button>Log In</button></NavLink>
            </div>
            </div>
        </ContainerDiv>
    )
}



const ContainerDiv = styled.div`
    font-family: 'Amatic SC', cursive;

    h1 {
        font-size: 3rem;
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
            // font-family: 'Poiret One', cursive;
            font-weight: 800;
            width: 96px;
            height: 52px;
            border-radius: 27px;
            margin-bottom: 15px;
            font-size: 1rem;
        }
    }


`;