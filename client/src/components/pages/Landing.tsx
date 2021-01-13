import React from 'react'
import hot1 from '../../hot-1.jpg'
import hot2 from '../../hot-2.jpg'
import hot3 from '../../hot-3.jpg'
import hot4 from '../../hot-4.jpg'
import hot5 from '../../hot-5.jpg'
import hot6 from '../../hot-6.jpg'
import * as FaIcons from 'react-icons/fa'
// import * as CgIcons from 'react-icons/cg'

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
                        <span>View News Feeds</span>
                    </div>
                    <div className='composition'>
                        <img className='composition__photo composition__photo--p1' src={hot1} alt='skyscraper photo' />
                        <img className='composition__photo composition__photo--p2' src={hot2} alt='business photo' />
                        <img className='composition__photo composition__photo--p3' src={hot3} alt='new stream photo' />
                        <img className='composition__photo composition__photo--p4' src={hot4} alt='typewriter photo' />
                        <img className='composition__photo composition__photo--p5' src={hot5} alt='news stand photo' />
                        <img className='composition__photo composition__photo--p6' src={hot6} alt='iphone photo' />
                    </div>
                </section>
                <footer className='footer'>
                        <div className='trackerfy-info'>
                            <p className='footer-title'>About</p>
                            <p >Welcome to HotOFFThePress where you can browse the lasted news headlines of different categories congregated in one site. Browse, and be directed to the news article link instantly. &#169; All rights reserved for news story images of the respective artice.   </p>
                        </div>
                        <div >
                            <p className='footer-title'>Site Links</p>
                            <a href='https://github.com/qsmity/hotoffthepress'>
                                <FaIcons.FaGithubSquare size='32px' />
                            </a>

                        </div>
                        <div >
                            <p className='footer-title'>My Links</p>
                            <a href='https://github.com/qsmity'>
                                <FaIcons.FaGithubSquare size='32px' />
                            </a>
                            <a href='https://www.linkedin.com/in/quynn-smith-a442671bb/'>
                                <FaIcons.FaLinkedin size='32px' />
                            </a>
                        </div>
                </footer>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Landing;