'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Post from './post.js';
import { observable, autorun, action, decorate } from "mobx";
import { observer, inject } from "mobx-react";
import GlobalStore from '../store/store_global.js'
import $ from 'jquery'
import OtherPageStore from '../store/store_otherpage.js'

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

class _OtherPage extends Component {
    componentDidMount() {
        OtherPageStore.getAccounts(this.props.match.params.id);
        console.log(OtherPageStore.accounts)
        OtherPageStore.timelinesAccounts();
    }
    render() {
        return (
            <div>
                <NavBar {...GlobalStore} />
                <div className="header-spacer" style={{ height: "100px" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="ui-block" style={{ borderTop: "0px" }}>
                                <div>
                                    <div className="top-header-author" style={{ top: "0px" }}>
                                        <img className="author-thumb img-responsive" src={OtherPageStore.accounts.avatar} alt="author" style={{width:"100px", height:"100px"}} />
                                        <div className="author-content">
                                            <a href="#" className="h4 author-name">{OtherPageStore.accounts.username}</a>
                                        </div>
                                        <button type="button" class="btn btn-success" style={{marginTop:"10px"}}>Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {OtherPageStore.status_list.map((status, index) => <div key={index} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"><Post {...status} /></div>)}
                    </div>
                </div>
            </div>
        );
    }
}

const OtherPage = observer(_OtherPage)

export default OtherPage;