'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Post from './post.js';
import Head from './head.js';
import { observable, autorun, action, decorate } from "mobx";
import { inject } from 'mobx-react';
import { observer } from "mobx-react";
import GlobalStore from '../store/store_global.js'
import Stores from '../store/stores.js'

function LoadMore(props) {
    return (
        <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
            <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
        </a>
    )
}

class _MyPost extends Component {
    componentWillMount() {
        Stores.MyPostStore.getMyPost();
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
                        {this.props.MyPostStore.status_list.map((status, index) => <div key={index} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"><Post {...status} /></div>)}
                    </div>
                </div>
            </div>
        );
    }
}

class _Collections extends Component {
    componentWillMount() {
        Stores.CollectionStore.getCollection();
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
                        {this.props.CollectionStore.status_list.map((status, index) => <div key={index} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"><Post {...status} /></div>)}
                    </div>
                </div>
            </div>
        );
    }
}

const MyPost = inject('MyPostStore')(observer(_MyPost))
const Collections = inject('CollectionStore')(observer(_Collections))

export { MyPost, Collections };
