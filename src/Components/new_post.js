'use strict';
import React, { Component } from 'react';
import $ from 'jquery'
import Stores from '../store/stores.js';
import { toast } from 'react-toastify';
import GlobalStore from '../store/store_global.js'
import {Link} from 'react-router-dom'

function NewPostAuthorThumb(props) {
    return (
        <div className="author-thumb">
            <img className="img-responsive" alt="author" src={props.avatar} style={{ width: "36px", height: "36px" }} />
        </div>
    )
}

function NewPostInput(props) {
    return (
        <div>
            <div className="form-group with-icon label-floating is-empty">
                <label className="control-label">Share what you are thinking here...</label>
                <textarea className="form-control" placeholder="" id="status_content" ></textarea>
            </div>
            {/* <img id="upload" className="img-responsive rounded float ml-10" alt="" src="" style={{ marginLeft: "20px", width: "100px", height: "100px" }} /> */}
        </div>
    )
}

function NewPostButton(props) {
    return (
        <div className="add-options-message">
            <a className="options-message" href="#" data-original-title="ADD PHOTOS" data-toggle="tooltip" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-camera-icon" /></svg>
            </a>
            <a className="options-message" href="#" data-original-title="TAG YOUR FRIENDS" data-toggle="tooltip" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-computer-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-computer-icon" /></svg>
            </a>
            <a className="options-message" href="#" data-original-title="ADD LOCATION" data-toggle="tooltip" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-small-pin-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-small-pin-icon" /></svg>
            </a>
            <Link to={"/homepage/" + GlobalStore.accounts.id}>
            <button type="button" className="btn btn-primary btn-md-2" onClick={function postStatus() { Stores.HomepageStore.postStatus($('#status_content').val(), $('#status_anonymous').val()); $('#status_content').val("") }}>Post</button>
            </Link>
            <div className="checkbox" style={{ display: "inline", padding: "5px 10px 0 0", verticalAlign: "middle", float: "right" }}>
                <label>
                    <input type="checkbox" />Anonymous
				</label>
            </div>
        </div>
    )
}

class NewPost extends Component {

    render() {
        return (
            <div className="ui-block">
                <div className="news-feed-form">
                    <div className="" aira-expanded="true">
                        <form>
                            <NewPostAuthorThumb {...GlobalStore.accounts} />
                            <NewPostInput {...this.props.HomepageStore} />
                            <NewPostButton {...this.props.HomepageStore} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost