import React from 'react'

const NotFound: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='heading-primary'>
                <span className='heading-primary--main'>404 not found</span>
                <span className='heading-primary--sub spacing'>Sorry that page could not be found</span>
            </h1>
            <a href='/' className='btn btn--white btn--animated'>HomePage</a>
        </header>
    )
}

export default NotFound;