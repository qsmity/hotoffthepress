import React from 'react'
import AuthForm from '../AuthForm'
import { RouteComponentProps } from 'react-router-dom'

const Session: React.FC<ISessionProps>= (props) => {
    return (
        <>
            <h1>this will be login page</h1>
            <AuthForm {...props}/>
        </>
    )
}

interface ISessionProps extends RouteComponentProps{
    authType: string;
    buttonText: string;
    heading: string
}
export default Session;