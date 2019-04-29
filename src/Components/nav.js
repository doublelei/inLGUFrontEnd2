'use strict';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Title(props) {
    return (
        <div className="page-title">
            <h6>{props.title}</h6>
        </div>
    )
}

function Search(props) {
    return (
        <form className="search-bar w-search notification-list friend-requests">
            <div className="form-group with-button is-empty">
                <input className="form-control js-user-search selectized" placeholder="Search here people or pages..." type="text" tabIndex="-1" style={{ dispaly: "none" }} />
                <div className="selectize-control form-control js-user-search multi">
                    <div className="selectize-input items not-full has-options">
                        <input type="text" autoComplete="off" tabIndex="" placeholder="Search here people or pages..." style={{ width: "229.859px" }} />
                    </div>
                    <div className="selectize-dropdown multi form-control js-user-search" style={{ display: "none", width: "500px", top: "70px", left: "0px" }}>
                        <div className="selectize-dropdown-content"></div></div></div>
                <button>
                    <svg className="olymp-magnifying-glass-icon"><use xlinkHref="/icons/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                </button>
                <span className="material-input"></span>
            </div>
        </form>
    )
}

function Notifications(props) {
    const notifications = props.notification.map((noticifation, index) => <Notification key={index} username={noticifation.username} action={noticifation.action} avatar={noticifation.avatar} time={noticifation.time} />);
    return (
        <div className="control-icon more has-items">
            <svg className="olymp-thunder-icon"><use xlinkHref="/icons/icons.svg#olymp-thunder-icon"></use></svg>

            <div className="label-avatar bg-primary">{props.notification.length}</div>

            <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notifications</h6>
                    <a href="#">Mark all as read</a>
                </div>

                <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="1b3f3c3b-dad2-3aa9-5917-4909939f28bd">
                    <ul className="notification-list">
                        {notifications}
                    </ul>
                    <div className="ps__scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                        <div className="ps__scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}>
                        </div>
                    </div>
                    <div className="ps__scrollbar-y-rail" style={{ top: "0px", height: "300px", right: "0px" }}>
                        <div className="ps__scrollbar-y" tabIndex="0" style={{ top: "0px", height: "148px" }}>
                        </div>
                    </div>
                </div>

                <a href="#" className="view-all bg-primary">View All Notifications</a>
            </div>
        </div>
    )

}

function Notification(props) {
    return (
        <li>
            <div className="author-thumb">
                <img className="img-responsive" src={props.avatar} alt="author" />
            </div>
            <div className="notification-event">
                <div><a href="#" className="h6 notification-friend">{props.username}</a> {props.action} on your<a href="#" className="notification-link">post</a>.</div>
                <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">{props.time}</time></span>
            </div>
            <span className="notification-icon">
                <svg className="olymp-comments-post-icon"><use xlinkHref="/icons/icons.svg#olymp-comments-post-icon"></use></svg>
            </span>
            <div className="more">
                <svg className="olymp-little-delete"><use xlinkHref="/icons/icons.svg#olymp-little-delete"></use></svg>
            </div>
        </li>
    )
}

function Author(props) {
    return (
        <div className="author-page author vcard inline-items more">
            <div className="author-thumb">
                <img className="avatar img-responsive" alt="author" src={props.avatar} style={{ width: "36px", height: "36px" }} />
                <span className="icon-status online"></span>
                <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="159c809c-36e9-fa65-ea20-01a26d50da7d">
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">Your Account</h6>
                        </div>
                        <ul className="account-settings">
                            <li>
                                <svg className="olymp-menu-icon"><use xlinkHref="/icons/icons.svg#olymp-menu-icon"></use></svg>
                                <span><Link to="/profile">Profile Settings</Link></span>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-logout-icon"><use xlinkHref="/icons/icons.svg#olymp-logout-icon"></use></svg>
                                    <span>Log Out</span>
                                </a>
                            </li>
                        </ul>
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">About Olympus</h6>
                        </div>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Terms and Conditions</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Careers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                        <div className="ps__scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                            <div className="ps__scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}>
                            </div>
                        </div>
                        <div className="ps__scrollbar-y-rail" style={{ top: "0px", right: "0px" }}>
                            <div className="ps__scrollbar-y" tabIndex="0" style={{ top: "0px", height: "0px" }}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a href="#" className="author-name fn">
                <div className="author-title">
                    {props.username} <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="/icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                </div>
            </a>
        </div>
    )
}

class NavBar extends Component {
    render() {
        return (
            <header className="header" id="site-header">
                <Title title="inLGU" />
                <div className="header-content-wrapper">
                    <Search />
                    <a href="#" className="link-find-friend">Find Friends</a>
                    <div className="control-block">
                        <Notifications {...this.props} />
                        <Author {...this.props.accounts} />
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar