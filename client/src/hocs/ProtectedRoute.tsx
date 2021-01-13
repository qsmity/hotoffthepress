import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute: React.FC<IProtectedRoute> = ({ component: Component, token, category, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => token ? <Component category={category} {...props} {...rest}/> : <Redirect to='/login'/>}
        />
    )
}

interface IProtectedRoute {
    component: React.FC<any>;
    exact?: boolean,
    path: string,
    token: string | undefined,
    category: string;
}

export default ProtectedRoute; 