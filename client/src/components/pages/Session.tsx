import React from 'react'
import AuthForm from '../AuthForm'
import { RouteComponentProps } from 'react-router-dom'
// const timesSquare = require('../../TimesSquare.mp4')

const Session: React.FC<ISessionProps> = (props) => {
    return (
        <>
            <header className='session-header'>
                {/* <div className='bg-video'>
                    <video className='bg-video__content' src={timesSquare} autoPlay muted loop>
                    Browser not supported
                    </video>
                </div> */}
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