import React, { useState } from 'react'
import * as mui from '@material-ui/core'
import { authenticateUser } from '../store/reducers/session'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../App'
import { removeError } from '../store/reducers/error'

//TYPES
import { RouteComponentProps } from 'react-router-dom'

export enum AuthType {
    SIGNUP = 'signup',
    LOGIN = 'login'
}

const AuthForm: React.FC<IAuthFormProps> = ({ authType, buttonText, heading, history}) => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const errors = useSelector((state: StoreState) => state.errors)

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>): void => setUsername(event.target.value)
    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value)
    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>): void => setPassword(event.target.value)
    const updateCheckPassword = (event: React.ChangeEvent<HTMLInputElement>): void => setCheckPassword(event.target.value)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        // if passwords match and on signup form
        if (isPasswordMatch() && authType === AuthType.SIGNUP) {
            dispatch(authenticateUser(authType, { username, email, password }))
            console.log('they match!!')
            // if on login form
        } else if (authType === AuthType.LOGIN) {
            dispatch(authenticateUser(authType, { email, password }))
        } else {
            //Todo
            console.log('they don\'t match')
        }

        // clear fields
        setUsername('')
        setPassword('')
        setCheckPassword('')
        setEmail('')
    }

    const isPasswordMatch = (): boolean => {
        return (password === checkPassword)
    }

    // listen for route changes - remove displayed error message
    history.listen( ()=> {
        dispatch(removeError());
    })


    return (
        <section className='authform'>
            { errors.message && (
                <div className='authform__errors'>
                    <h2>{errors.message}</h2>
                </div>
            )}
            <form className='form' onSubmit={handleSubmit}>
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
                <mui.Button style={{ fontSize: '1.6rem' }} variant='contained' color='primary' type='submit'>{buttonText}&rarr;</mui.Button>
                {authType === AuthType.SIGNUP && (
                    <p>Have an account already. <a href='/login'>Login</a></p>

                )}
                {authType === AuthType.LOGIN && (
                    <p>Don't have an account? <a href='/signup'>SignUp</a></p>

                )}

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