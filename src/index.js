import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage.js'
import Profile from './Components/profilePage.js'
import { Follow, Follower } from './Components/follow.js'
import { MyPost, Collections } from './Components/collection.js'
import NotFound from './Components/404.js'
// import * as serviceWorker from './serviceWorker.js';
import Login from './Components/loginPage.js'

import { BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import { toast } from 'react-toastify';
import Stores from './store/stores.js'
import { Provider } from 'mobx-react';
toast.configure()

//ReactDOM.render(<Homepage />, document.getElementById('root'));
ReactDOM.render(
    <Provider {...Stores}>
        <Router >
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login/" component={Login} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/follow" component={Follow} />
                <Route path="/follower" component={Follower} />
                <Route path="/collection" component={Collections} />
                <Route path="/mypost" component={MyPost} />
                <Route path="/404" component={NotFound} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
