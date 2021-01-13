import React, { useEffect } from 'react'
import { Iheadline } from './pages/NewsFeed'
import  LoadMoreButton  from './utilites/LoadMoreButton'

const Headlines: React.FC<IHeadlineProps> = ({ newsResults, category, loadMoreResults }) => {

    useEffect(() => {
        console.log('')
    }, [newsResults, category])

    // redirect user to news story site
    const handleClick = (e: React.SyntheticEvent) => {
        window.location.href = e.currentTarget.id
    }

    const formatDate = (date: string): string => {
        const convertedDate = new Date(date).toString()
        const formattedDate = convertedDate.split('GMT')[0]
        return formattedDate
    }

    const addEllipsis = (description: string): string => {
        if (description.length > 75) {
            return description.slice(0, 75) + '...'
        }
        return description;
    }

    return (
        <>
            <section className='section-newsfeed'>
                {(newsResults) && (
                    newsResults.map((headline: Iheadline, i) => {
                        return <figure key={i + headline.url} onClick={handleClick} id={headline.url} className='section-newsfeed__shape'>
                            <img className='section-newsfeed__image' src={headline.imageUrl} alt={`${category} photo`} />
                            <figcaption className='section-newsfeed__text'>
                                <span className='section-newsfeed__description'>{addEllipsis(headline.description)}</span>
                                <span className='section-newsfeed__pubDate'>Date: {formatDate(headline.pubDate)}</span>
                            </figcaption>
                        </figure>
                    })

                )}
            </section>
            <LoadMoreButton loadMoreResults={loadMoreResults}/>
        </>
    )

}

interface IHeadlineProps {
    newsResults: Iheadline[] | null;
    category: string;
    loadMoreResults: () => void;

}

export default Headlines;