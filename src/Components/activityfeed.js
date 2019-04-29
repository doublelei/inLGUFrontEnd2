'use strict';
import React, { Component } from 'react';

function Activity(props) {
    return (
        <li>
            <div className="author-thumb">
                <img className="img-responsive" src={props.avatar} alt="author" />
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">{props.username}</a> {props.action} on {props.targetname}’s <a href="#" className="notification-link">post.</a>.
            <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">{props.time}</time></span>
            </div>
        </li>
    )
}

class ActivityFeed extends Component {
    render() {
        return (
            <div className="ui-block">
                <div className="ui-block-title">
                    <h6 className="title">Activity Feed</h6>
                </div>
                <ul className="widget w-activity-feed notification-list">
                    {this.props.activity_feed.map((activity, index) => <Activity key={index} {...activity} />)}
                </ul>
            </div>
        );
    }
}

export default ActivityFeed;