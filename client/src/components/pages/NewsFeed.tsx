import React from 'react'

const NewsFeed: React.FC<INewsFeedProps> = ({ category }) => {
    return (
        <>
            <h1>{category}</h1>
            <h1>{category}</h1>
            <h1>{category}</h1>
            <h1>{category}</h1>
            <h1>{category}</h1>
            <div className='heading-secondary'>
                <span className={category}>{category}</span>
            </div>
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