import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../store/auth'

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    }

    if (currentUserId) return <Redirect to="/" />

    return (
        <form onSubmit={handleSubmit}>
            <label>Email or Username <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /> </label>

            <label>Password <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} /> </label>

            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginPage;
