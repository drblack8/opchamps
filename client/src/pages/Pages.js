import React from 'react'
import { Route } from 'react-router-dom'
import loginPage from './LoginPage'
export default function Pages() {
    return (
        <>
            <Route path="/login" component={loginPage} />
        </>
    )
}
