import React, { useEffect, useState } from 'react'
import hot3 from '../../hot-3.jpg'


const NewsFeed: React.FC<INewsFeedProps> = ({ category }) => {

    const [newsResults, setNewsResults] = useState([])

    // redirect user to news story site
    const handleclick = (e: React.SyntheticEvent) => {
        window.location.href = e.currentTarget.id
    }

    // useEffect( () => {
    //     ( async () => {
    //         const 
    //         const res = await fetch('')
    //     })()
    // }, [category])
    
    return (
        <>
            <header className={`header ${category}`}>
                <div className='heading-secondary'>
                    <span className={category}>{category}</span>
                </div>
            </header>
            <main>
                <div className='refresh'>
                    <a href='#' className='btn btn--grey'>
                        update
                    </a>

                    
                </div>
                <section className='section-newsfeed'>
                    <figure onClick={handleclick} id='http://www.google.com' className='section-newsfeed__shape'>
                        <img className='section-newsfeed__image' src={hot3} alt='' />
                        <figcaption className='section-newsfeed__text'>
                            lorem ipsum jidjifj idfjidjfid jidjfidfj
                        </figcaption>
                    </figure>
                    <figure className='section-newsfeed__shape'>
                        <img className='section-newsfeed__image' src={hot3} alt='' />
                        <figcaption className='section-newsfeed__text'>
                            lorem ipsum jidjifj idfjidjfid jidjfidfj
                        </figcaption>
                    </figure>
                    <figure className='section-newsfeed__shape'>
                        <img className='section-newsfeed__image' src={hot3} alt='' />
                        <figcaption className='section-newsfeed__text'>
                            lorem ipsum jidjifj idfjidjfid jidjfidfj
                        </figcaption>
                    </figure>
                    <figure className='section-newsfeed__shape'>
                        <img className='section-newsfeed__image' src={hot3} alt='' />
                        <figcaption className='section-newsfeed__text'>
                            lorem ipsum jidjifj idfjidjfid jidjfidfj
                        </figcaption>
                    </figure>
                    <figure className='section-newsfeed__shape'>
                        <img className='section-newsfeed__image' src={hot3} alt='' />
                        <figcaption className='section-newsfeed__text'>
                            lorem ipsum jidjifj idfjidjfid jidjfidfj
                        </figcaption>
                    </figure>
                </section>

            </main>
        </>
    )
}

interface INewsFeedProps {
    category: string;
}

enum Categories {
    BUSINESS = 'business',
    ENTERTAINMENT = 'entertainment',
    GENERAL = 'general',
    HEALTH = 'health',
    SCIENCE = 'science',
    SPORTS = 'sports',
    TECH = 'tech'
}

export default NewsFeed;