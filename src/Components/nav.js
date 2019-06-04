'use strict';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import GlobalStore from '../store/store_global.js'
import $ from 'jquery'
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

                <button>
                    <svg className="olymp-magnifying-glass-icon"><use xlinkHref="/icons/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                </button>
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
            <Link to={"/homepage/" + props.id}>
                    <img className="avatar img-responsive" alt="author" src={props.avatar} style={{ width: "36px", height: "36px" }} />
                </Link>
                <span className="icon-status online"></span>
                <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="159c809c-36e9-fa65-ea20-01a26d50da7d">
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">Your Account</h6>
                        </div>
                        <ul className="account-settings">
                            <li>
                                <Link to={"/profile/" + props.id}>
                                    <svg className="olymp-menu-icon"><use xlinkHref="/icons/icons.svg#olymp-menu-icon"></use></svg>
                                    <span>Profile Settings</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" onClick={function logout(){GlobalStore.logout()}}>
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
            <div>
                <div className="fixed-sidebar fixed-sidebar-responsive" id="sidebar">

                    <div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive" onClick={function handleClick(){
                        $("#sidebar").toggleClass('open')}}>
                        <a href="#" className="logo js-sidebar-open" >
                            <img src="/img/badge8.png"  alt="inLGU"/>
                        </a>
                    </div>

                    <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
                        <a href="#" className="logo" onClick={function handleClick(){
                        $("#sidebar").toggleClass('open')}}>
                            <img src="/img/badge8.png"  alt="inLGU"/>
                            <h6 className="logo-title">inLGU</h6>
                        </a>

                        <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="304ab1ff-d933-0576-e810-3acbf502a877">

                            <div className="control-block">
                                <div className="author-page author vcard inline-items">
                                    <div className="author-thumb">
                                        <img alt="author" src={GlobalStore.accounts.avatar} className="avatar"/>
                                        <span className="icon-status online"></span>
                                    </div>
                                    <a href="02-ProfilePage.html" className="author-name fn">
                                        <div className="author-title">
                                            {GlobalStore.accounts.username}
                                        </div>
                                        <span className="author-subtitle">SPACE COWBOY</span>
                                    </a>
                                </div>
                            </div>

                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">MAIN SECTIONS</h6>
                            </div>

                            <ul className="left-menu" style={{padding:"0px"}}>
                                <li>
                                    <Link to={"/homepage/" + GlobalStore.accounts.id} className="link-find-friend"><span>Homepage</span></Link>
                                </li>
                                <li>
                                    <Link to="/mypost" className="link-find-friend"><span>My Posts</span></Link>
                                </li>
                                <li>
                                    <Link to="/collection" className="link-find-friend"><span>Collects</span></Link>
                                </li>
                                <li>
                                    <Link to="/follower" className="link-find-friend"><span>Followers</span></Link>
                                </li>
                                <li>    
                                    <Link to="/follow" className="link-find-friend"><span>Follows</span></Link>
                                </li>
                            </ul>

                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">YOUR ACCOUNT</h6>
                            </div>

                            <ul className="left-menu" style={{padding:"0px"}}>
                                <li>
                                    <Link to="/profile" className="link-find-friend">
                                        <span>Profile Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={function logout(){GlobalStore.logout()}} className="link-find-friend">
                                        <span>Log Out</span>
                                    </a>
                                </li>
                            </ul>

                            {/* <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">About Olympus</h6>
                            </div>

                            <ul className="about-olympus">
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
                            </ul> */}

                        </div>
                    </div>
                </div>

                <header className="header" id="site-header">
                    <Title title="inLGU" />
                    <div className="header-content-wrapper">
                        {/* <Search /> */}
                        <div className="row">
                            <Link to={"/homepage/" + GlobalStore.accounts.id} className="link-find-friend">Homepage</Link>
                            <Link to="/mypost" className="link-find-friend">MyPosts</Link>
                            <Link to="/collection" className="link-find-friend">Collects</Link>
                            <Link to="/follower" className="link-find-friend">Followers</Link>
                            <Link to="/follow" className="link-find-friend">Follows</Link>
                            <div className="control-block my-auto ">
                                <Notifications {...this.props} />
                                <Author {...this.props.accounts} />
                            </div>
                        </div>
                    </div>
                </header>
                <header className="header header-responsive" id="site-header-responsive" style={{height:"70px"}}>
                    <a className="navbar-brand mt-3 ml-3" href="#">inLGU</a>
                </header>

                
            </div>
        )
    }
}

export default NavBar