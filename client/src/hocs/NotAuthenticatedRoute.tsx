import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const NotAuthenticatedRoute: React.FC<INotAuthenticatedRoute> = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => !token ? <Component {...props} {...rest}/> : <Redirect to='/news/entertainment'/>}
        />
    )
}

interface INotAuthenticatedRoute {
    component: React.FC<any>;
    exact?: boolean;
    path: string;
    token: string | undefined;
    authType?: string;
    buttonText?: string;
    heading?: string;
}

export default NotAuthenticatedRoute; 