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
// import './Bootstrap/dist/css/bootstrap-reboot.css'
// import "./Bootstrap/dist/css/bootstrap.css"
// import "./Bootstrap/dist/css/bootstrap-grid.css"
// import "./css/theme-styles.css"
// import "./css/blocks.css"
// import "./css/fonts.css"
// import "./css/jquery.mCustomScrollbar.min.css"
// import "./css/simplecalendar.css"
// import "./css/daterangepicker.css"
// import "./css/magnific-popup.css"
// import "./css/ReactToastify.min.css"

// import "./js/jquery-3.2.0.min.js"
// import "./js/material.min.js"
// import "./js/theme-plugins.js"
// import "./js/main.js"
// import "./js/ajax-pagination.js"
// import "./js/selectize.min.js"
// import "./js/moment.min.js"
// import "./js/daterangepicker.min.js"
// import "./js/simplecalendar.js"
// import "./js/jquery.magnific-popup.min.js"
// import "./js/mediaelement-and-player.min.js"
// import "./js/mediaelement-playlist-plugin.min.js"
// require("./js/jquery-3.2.0.min.js")
// require("./js/material.min.js")
// require("./js/theme-plugins.js")
// require("./js/main.js")
// require("./js/ajax-pagination.js")
// require("./js/selectize.min.js")
// require("./js/moment.min.js")
// require("./js/daterangepicker.min.js")
// require("./js/simplecalendar.js")
// require("./js/jquery.magnific-popup.min.js")
// require("./js/mediaelement-and-player.min.js")
// require("./js/mediaelement-playlist-plugin.min.js")
//configure toast
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
