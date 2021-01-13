import React from 'react'

const LoadMoreButton: React.FC<ILoadMoreButtonProps> = ({ loadMoreResults }) => {
    return (
        <div className='load-more'>
            <a
                onClick={loadMoreResults}
                href='#load-more-button'
                id='load-more-button'
                className='btn btn--grey'>
                    Load More
            </a>
        </div>
    )
}

interface ILoadMoreButtonProps {
    loadMoreResults: () => void;
}

export default LoadMoreButton;