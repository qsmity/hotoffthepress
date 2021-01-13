import React, { useEffect } from 'react'

const ErrorMessage: React.FC<IErrorMessageProps> = ({ isError }) => {

    useEffect(() => {
        console.log('')
    }, [isError])

    if (isError) {
        return (
            <div>
                <h2>No Results Found</h2>
            </div>
        )
    } else {
        return null
    }
}

export default ErrorMessage;

interface IErrorMessageProps {
    isError: boolean
}