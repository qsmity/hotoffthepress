import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import Landing from './pages/Landing';
import Session from './pages/Session'
import NewsFeed from './pages/NewsFeed'
import ProtectedRoute from '../hocs/ProtectedRoute'
import { useSelector } from 'react-redux';
import NotAuthenticatedRoute from '../hocs/NotAuthenticatedRoute';
import NotFound from './pages/NotFound'
//TYPES
import { StoreState } from '../App'

const MainRoutes: React.FC<RouteComponentProps> = (props) => {
    const token = useSelector((state: StoreState) => state.session.user.token)
    return (
        <div>
            <Switch>
                <NotAuthenticatedRoute
                    exact
                    token={token}
                    path='/'
                    component={Landing}
                />
                <NotAuthenticatedRoute
                    exact
                    token={token}
                    path='/signup'
                    authType='signup'
                    buttonText='signup' 
                    heading='Sign Up' 
                    component={Session}
                />
                <NotAuthenticatedRoute
                    exact
                    token={token}
                    path='/login'
                    authType='login' 
                    buttonText='login'
                     heading='welcome back'
                    component={Session}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/general'
                    category='general'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/business'
                    category='business'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/general'
                    category='general'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/business'
                    category='business'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/tech'
                    category='tech'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/sports'
                    category='sports'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/entertainment'
                    category='entertainment'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/health'
                    category='health'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/news/science'
                    category='science'
                    component={NewsFeed}
                />
                <Route component={NotFound}/>
                {/* ToDo */}
                {/* <ProtectedRoute
                    exact
                    token={token}
                    path='path='/news/search''
                    category='science'
                    component={NewsFeed}
                />
                <ProtectedRoute
                    exact
                    token={token}
                    path='/user/:id/bookmarks'
                    category='science'
                    component={NewsFeed}
                /> */}

            </Switch>
        </div>
    )
}

export default withRouter(MainRoutes);