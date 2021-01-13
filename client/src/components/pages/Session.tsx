import React from 'react'
import AuthForm from '../AuthForm'
import { RouteComponentProps } from 'react-router-dom'

const Session: React.FC<ISessionProps> = (props) => {
    return (
        <>
            <header className='session-header'>
                <div className='session-header__text-box'>
                    <h1 className='heading-primary'>
                        <span className='heading-primary--main'>Explore</span>
                        <span className='heading-primary--sub'>the world of news</span>
                    </h1>
                </div>
            </header>
            <main className='form-container'>
                <AuthForm {...props} />
            </main>
        </>
    )
}

interface ISessionProps extends RouteComponentProps {
    authType: string;
    buttonText: string;
    heading: string
}
export default Session;