import React from 'react'

const LoadMoreButton: React.FC<ILoadMoreButtonProps> = ({ loadMoreResults }) => {
    return (
        <>
            <a
                onClick={loadMoreResults}
                href='#results-button'
                id='results-button'
                className='btn btn--grey'>
                    Load More
            </a>
        </>
    )
}

interface ILoadMoreButtonProps {
    loadMoreResults: () => void;
}

export default LoadMoreButton;