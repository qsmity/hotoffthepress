import React from 'react';
import { Switch, Route, withRouter, Redirect, RouteComponentProps } from 'react-router-dom'
import Landing from './pages/Landing';
import Session from './pages/Session'

const MainRoutes: React.FC = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={props => <Landing />}></Route>
                <Route exact path='/signup' render={props => <Session />}></Route>
                <Route exact path='/login'></Route>
                <Route exact path='/news/:category'></Route>
                <Route exact path='/news/search'></Route>
                <Route exact path='/user/:id/bookmarks'></Route>
            </Switch>
        </div>
    )
}

export default withRouter(MainRoutes);