'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Head from './head.js';
import Modals from './modal.js';
import { observable, autorun, action, decorate } from "mobx";
import { inject } from 'mobx-react';
import { observer } from "mobx-react";
import GlobalStore from '../store/store_global.js'
import { Link } from 'react-router-dom'
import Store from '../store/stores.js'
function Searchfriend(props) {
    return (
        <div className="ui-block responsive-flex">
            <div className="ui-block-title">
                <div className="h6 title">{props.name}’s {props.page} ({props.num})</div>
                <form className="w-search">
                    <div className="form-group with-button is-empty">
                        <input className="form-control" type="text" placeholder="Search Friends..." />
                        <button>
                            <svg className="olymp-magnifying-glass-icon"><use xlinkHref="../../public/icons/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                        </button>
                        <span className="material-input"></span></div>
                </form>
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="../../public/icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
            </div>
        </div>
    )
}

function Friends(props) {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="ui-block">
                <div className="friend-item">
                    <div className="friend-item-content" style={{ paddingBottom: "0", paddingTop: "10px" }}>
                        <div className="friend-avatar">
                            <div className="author-thumb">
                                <Link to={"/otherpage/" + props.id}>
                                    <img className="img-responsive" src={props.avatar} alt="author" style={{ width: "98px", height: "98px" }} />
                                </Link>
                            </div>
                            <div className="author-content">
                                <a href="#" className="h5 author-name">{props.username}</a>
                            </div>
                        </div>
                        <div className="friend-count" style={{ marginBottom: "20px" }}>
                            <a href="#" className="friend-count-item">
                                <div className="h6">{props.following_count}</div>
                                <div className="title">Follows</div>
                            </a>
                            <a href="#" className="friend-count-item">
                                <div className="h6">{props.followers_count}</div>
                                <div className="title">Followers</div>
                            </a>
                            <a href="#" className="friend-count-item">
                                <div className="h6">{props.statuses_count}</div>
                                <div className="title">Posts</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

class _Follow extends Component {

    componentWillMount() {
        Store.FollowStore.getfollowing();
    }

    render() {
        return (
            <div>
                <NavBar {...GlobalStore} />
                <div className="header-spacer" style={{height:"100px"}}></div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head {...GlobalStore.accounts} />
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Searchfriend name={GlobalStore.accounts.username} page="Followers" num={GlobalStore.accounts.followers_count} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.props.FollowStore.accounts.map((account, index) => <Friends key={index} {...account} />)}
                    </div>
                </div>
                <Modals />
            </div>
        );
    }
}

class _Follower extends Component {
    componentWillMount() {
        Store.FollowerStore.getfollower();
    }
    render() {
        return (
            <div>
                <NavBar {...GlobalStore} />
                <div className="header-spacer" style={{height:"100px"}}></div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head {...GlobalStore.accounts} />
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Searchfriend name={GlobalStore.accounts.username} page="Follows" num={GlobalStore.accounts.following_count} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.props.FollowerStore.accounts.map((account, index) => <Friends key={index} {...account} />)}
                    </div>
                </div>
                <Modals />
            </div>
        );
    }
}

const Follow = inject('FollowStore')(observer(_Follow))
const Follower = inject('FollowerStore')(observer(_Follower))

export { Follow, Follower };