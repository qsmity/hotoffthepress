import React from 'react';
import { Switch, Route, withRouter, Redirect, RouteComponentProps } from 'react-router-dom'
import Landing from './pages/Landing';
import Session from './pages/Session'

const MainRoutes: React.FC = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={props => <Landing />}/>
                <Route
                    exact
                    path='/signup'
                    render={props  => {
                        return (
                            <Session authType='signup' buttonText='signup' heading='explore the world of news' {...props} />
                        )
                    }}/>
                <Route
                    exact
                    path='/login'
                    render={props => {
                        return (
                            <Session authType='login' buttonText='login' heading='welcome back' {...props} />
                        )
                    }}/>
                <Route exact path='/news/:category'/>
                <Route exact path='/news/search'/>
                <Route exact path='/user/:id/bookmarks'/>
            </Switch>
        </div>
    )
}

export default withRouter(MainRoutes);