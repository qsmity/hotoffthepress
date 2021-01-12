import React from 'react'
import hot1 from '../../hot-1.jpg'
import hot2 from '../../hot-2.jpg'
import hot3 from '../../hot-3.jpg'
import hot4 from '../../hot-4.jpg'
import hot5 from '../../hot-5.jpg'
import hot6 from '../../hot-6.jpg'

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
                    <div className='heading-secondary section-composite__heading'>
                        <p>View News Feeds</p>
                    </div>
                    <div className='composition'>
                        <img className='composition__photo composition__photo-p1' src={hot1} alt=''/>
                        <img className='composition__photo composition__photo-p2' src={hot2} alt=''/>
                        <img className='composition__photo composition__photo-p3' src={hot3} alt=''/>
                        <img className='composition__photo composition__photo-p4' src={hot4} alt=''/>
                        <img className='composition__photo composition__photo-p5' src={hot5} alt=''/>
                        <img className='composition__photo composition__photo-p6' src={hot6} alt=''/>
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Landing;