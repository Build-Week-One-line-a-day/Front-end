import React from 'react'
import {NavLink} from 'react-router-dom'

export default function LoginSignup() {
    return (
        <div>
            <NavLink to='user-form'><button>Sign Up</button></NavLink>
            <NavLink to='user-form'><button>Log In</button></NavLink>
        </div>
    )
}
