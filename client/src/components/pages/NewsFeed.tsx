import React, { useEffect, useState } from 'react'
import { dataNewsApiCall } from '../../services/api'
import Headlines from '../Headlines'
import ProgressLoader from '../utilites/ProgressLoader'
import ErrorMessage from './ErrorMessage'

const NewsFeed: React.FC<INewsFeedProps> = ({ category }) => {

    const [newsResults, setNewsResults] = useState<Iheadline[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [isError, setIsError] = useState(false)

    const getNewResults = async (): Promise<void> => {
        try {
            // remove api error if exists 
            setIsError(false)
            // grab new headlines
            const headlines: { hits: Iheadline[] } = await dataNewsApiCall(category, currentPageNumber)
            //update new results
            setNewsResults(headlines.hits)

        } catch (e) {
            setIsError(true)
        }
    }

    const loadMoreResults = async (): Promise<void> => {
        try {
            // remove api error if exists 
            setIsError(false)
            // grab new headlines
            const headlines: { hits: Iheadline[] } = await dataNewsApiCall(category, currentPageNumber + 1)
            //update new results
            if(newsResults){
                setNewsResults(newsResults.concat(headlines.hits))
            }

        } catch (e) {
            setIsError(true)
        }
    }

    useEffect(() => {
        (async () => {

            try {
                setIsError(false)
                const headlines: { hits: Iheadline[] } = await dataNewsApiCall(category, currentPageNumber + 1)
                setNewsResults(headlines.hits)
                setIsLoading(false)
            } catch (e) {
                setIsError(true)
            }

        })()
    }, [category])

    return (
        <>
            <header className={`header ${category}`}>
                <div className='heading-secondary'>
                    <span className={category}>{category}</span>
                </div>
            </header>
            <main>
                <div className='refresh'>
                    <ProgressLoader isLoading={isLoading} />
                    <a
                        onClick={getNewResults}
                        href='#results-button'
                        id='results-button'
                        className='btn btn--grey'>
                        new results
                        </a>
                </div>

                <Headlines
                    category={category}
                    newsResults={newsResults}
                    loadMoreResults={loadMoreResults} />
                <ErrorMessage isError={isError} />

            </main>
        </>
    )
}

interface INewsFeedProps {
    category: string;
}

export interface Iheadline {
    url: string,
    imageUrl: string,
    description: string,
    pubDate: string,
    title: string
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