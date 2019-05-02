'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import NewPost from './new_post.js'
import Post from './post.js';
import Poll from './poll.js';
import Modals from './modal.js'
import Weather from './weather.js'
import Calendar from './calendar.js'
import Head from './head.js'
import Hottags from "./hottag.js"
import ActivityFeed from "./activityfeed.js"
import { observable, autorun, action, decorate } from "mobx";
import { observer, inject } from "mobx-react";
import GlobalStore from '../store/store_global.js'
import $ from 'jquery'

function LoadMore(props) {
    return (
        <a id="load-more-button" className="btn btn-control btn-more" onClick={function LoadMoreTimelines() {
            this.props.HomepageStore.last_time_stamp.timestamp = props.lastStatus.created_at;
            this.props.HomepageStore.LoadMoreTimelines();
        }}>
            <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
        </a>
    )
}

class _Homepage extends Component {
    componentDidMount() {
        GlobalStore.accounts.id = this.props.match.params.id;
        console.log(GlobalStore.accounts)
        GlobalStore.getCurrentUser();
        this.props.HomepageStore.timelinesPublic();
        console.log(this.props.HomepageStore.status_list)
        this.props.HomepageStore.getHotTags();
    }
    render() {
        return (
            <div>
                <NavBar {...GlobalStore} />
                <div className="header-spacer" style={{height:"200px"}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head {...GlobalStore.accounts} />
                        </div>
                    </div>
                </div>
                <div> {GlobalStore.test} </div>
                <div className="container">
                    <div className="row">
                        <main className="col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-xs-12">
                            <NewPost {...this.props} />
                            <div id="newsfeed-items-grid">
                                {this.props.HomepageStore.status_list.map((status, index) => <Post key={index} {...status} />)}
                            </div>

                            {/* <LoadMore lastStatus={this.props.HomepageStore.status_list[this.props.HomepageStore.status_list.length - 1]}/> */}
                        </main>

                        <aside className="col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-xs-12">
                            <Weather info={this.props.HomepageStore} />
                            <Calendar />
                        </aside>

                        <aside className="col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <Hottags hot_tag={this.props.HomepageStore.hot_tag} />
                            <ActivityFeed {...this.props.HomepageStore} />
                        </aside>
                    </div>
                </div>
                <Modals />
            </div>
        );
    }
}

const Homepage = inject('HomepageStore')(observer(_Homepage))

export default Homepage;