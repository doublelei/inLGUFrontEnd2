'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Post from './post.js';
import { observer} from "mobx-react";
import GlobalStore from '../store/store_global.js'
import OtherPageStore from '../store/store_otherpage.js'
import Stores from '../store/stores.js';
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

function AddTag(props) {
    return (
        <div className="modal fade" id="add-tag" aria-hidden="true" style={{ display: 'none', top: "30%", width: "20%", left:"40%"}}>
            <div className="modal-dialog ui-block window-popup">
                <a className="close icon-close" aria-label="Close" href="/" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title" style={{borderBottom:"0px", paddingLeft:"5%"}}>
                    <h6 className="title">Add One Tag</h6>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <input type="text" id="modal-input" placeholder="#Tag" style={{paddingLeft:"5%", height:"60%"}}/>
                        </div>
                        <div className="col-md-4" >
                            <button type="button" className="btn btn-success" data-dismiss="modal" style={{paddingLeft:"5%", height:"60%"}} onClick={function addtag(){Stores.HomepageStore.tagStatus($('#modal-input').val()); $("#modal-input").val(""); OtherPageStore.timelinesAccounts()}}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
class _OtherPage extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        OtherPageStore.accounts.id = this.props.match.params.id
        OtherPageStore.getAccounts(this.props.match.params.id);
        
        OtherPageStore.timelinesAccounts();
        console.log(OtherPageStore.status_list)
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
                                        <button type="button" class="btn btn-success" style={{marginTop:"10px"}} onClick={function follow(){}}>Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: "200px" }}>
                    <div className="row">
                        {OtherPageStore.status_list.map((status, index) => <div key={index} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"><Post {...status} /></div>)}
                    </div>
                </div>
                <AddTag></AddTag>
            </div>
        );
    }
}

const OtherPage = observer(_OtherPage)

export default OtherPage;