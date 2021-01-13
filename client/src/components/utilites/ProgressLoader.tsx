import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core';

const ProgressLoader: React.FC<IProgressLoaderProps> = ({ isLoading }) => {

    useEffect(()=> {
        console.log('')
    },[isLoading])
    
    if(isLoading){
        return (
            <div>
                <CircularProgress />
            </div>
        )
    } else {
        return null
    }
}

export default ProgressLoader;

interface IProgressLoaderProps {
    isLoading: boolean
}