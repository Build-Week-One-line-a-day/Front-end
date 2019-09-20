import React from 'react';
import {NavLink} from 'react-router-dom';
// import styled from 'styled-components'
import HomeImage from '../../img/HomeImage.svg'

export default function LoginSignup() {
    return (
        <div>
            <h1>One Line A Day Journal</h1>
            <div>
            <img width={400} src={HomeImage}/>
            <div className="button-section">
                <NavLink to='user-register'><button>Sign Up</button></NavLink>
                <NavLink to='user-login'><button>Log In</button></NavLink>
            </div>
            </div>
        </div>
    )
}
