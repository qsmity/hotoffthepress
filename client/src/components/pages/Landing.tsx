import React from 'react'

const Landing: React.FC = () => {
    return (
        <>
            <header className='header'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Capture</span>
                    <span className='heading-primary--sub spacing'>Latest news</span>
                </h1>
                <a href='/signup' className='btn btn--white btn--animated'>SignUp Here</a>
            </header>
            <main>
                <section className='section-composite'>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Landing;