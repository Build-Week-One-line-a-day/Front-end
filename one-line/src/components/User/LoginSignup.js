import React from 'react'
import {NavLink} from 'react-router-dom'

export default function LoginSignup() {
    return (
        <div>
            <NavLink to='user-register'><button>Sign Up</button></NavLink>
            <NavLink to='user-login'><button>Log In</button></NavLink>
        </div>
    )
}
