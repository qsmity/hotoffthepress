import React from 'react';
import { Switch, Route, withRouter, Redirect, RouteComponentProps } from 'react-router-dom'
import Landing from './pages/Landing';
import Session from './pages/Session'
import NewsFeed from './pages/NewsFeed'

const MainRoutes: React.FC = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={props => <Landing />} />
                <Route
                    exact
                    path='/signup'
                    render={props => {
                        return (
                            <Session authType='signup' buttonText='signup' heading='Sign Up' {...props} />
                        )
                    }} />
                <Route
                    exact
                    path='/login'
                    render={props => {
                        return (
                            <Session authType='login' buttonText='login' heading='welcome back' {...props} />
                        )
                    }} />
                   
                <Route exact path='/news/general'
                    render={props => {
                        return (
                            <NewsFeed category='general' />
                        )
                    }}
                />
                <Route exact path='/news/business'
                    render={props => {
                        return (
                            <NewsFeed category='business' />
                        )
                    }}
                />
                <Route exact path='/news/tech'
                    render={props => {
                        return (
                            <NewsFeed category='tech'/>
                        )
                    }}
                />
                <Route exact path='/news/entertainment'
                    render={props => {
                        return (
                            <NewsFeed category='entertainment'/>
                        )
                    }}
                />
                <Route exact path='/news/sports' 
                    render={props => {
                        return (
                            <NewsFeed category='sports'/>
                        )
                    }}
                />
                <Route exact path='/news/science'
                    render={props => {
                        return (
                            <NewsFeed category='science'/>
                        )
                    }}
                />
                <Route exact path='/news/health'
                    render={props => {
                        return (
                            <NewsFeed category='health'/>
                        )
                    }}
                />
                <Route exact path='/news/search' />
                <Route exact path='/user/:id/bookmarks' />
            </Switch>
        </div>
    )
}

export default withRouter(MainRoutes);