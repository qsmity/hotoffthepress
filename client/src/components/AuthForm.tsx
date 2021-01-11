import React, { useState } from 'react'
import * as mui from '@material-ui/core'
import { backendApiCall } from '../services/api'
//TYPES
import { RouteComponentProps } from 'react-router-dom'

enum AuthType {
    SIGNUP = 'signup',
    LOGIN = 'login'
}

const AuthForm: React.FC<IAuthFormProps> = ({ authType, buttonText, heading }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>): void => setUsername(event.target.value)
    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value)
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>): void => setPassword(event.target.value)
    const updateCheckPassword = (event: React.ChangeEvent<HTMLInputElement>): void => setCheckPassword(event.target.value)

    const handleSubmit = (event: React.SyntheticEvent) => { 
        event.preventDefault()
        if(isPasswordMatch()){
            console.log('they match!!')
        } else {
            console.log('they don\'t match')
        }
    }

    const isPasswordMatch = (): boolean => {
        return (password === checkPassword)
    }


    return (
        <section className='authform'>
            <form onSubmit={handleSubmit}>
                <h1>This is AuthForm</h1>
                <h1>This is AuthForm</h1>
                <h1>This is AuthForm</h1>
                <h1>This is AuthForm</h1>
                <h2>{heading}</h2>
                
                {authType === AuthType.SIGNUP && (
                    <mui.TextField
                        id='username'
                        label='Username:'
                        variant='filled'
                        value={username}
                        onChange={updateUsername}
                    />
                )}

                <mui.TextField
                    id='email'
                    label='Email:'
                    variant='filled'
                    value={email}
                    onChange={updateEmail}
                />
                <mui.TextField
                    id='password'
                    label='Password:'
                    variant='filled'
                    type='password'
                    value={password}
                    onChange={updatePassword}
                />

                {authType === AuthType.SIGNUP && (
                    <mui.TextField
                        id='checkPassword'
                        label='Check Password:'
                        variant='filled'
                        type='password'
                        value={checkPassword}
                        onChange={updateCheckPassword}
                    />
                )}
                <mui.Button variant='contained' color='primary' type='submit'>{buttonText}&rarr;</mui.Button>

            </form>
        </section>
    )
}

interface IAuthFormProps extends RouteComponentProps {
    authType: string;
    buttonText: string;
    heading: string
}

export default AuthForm;