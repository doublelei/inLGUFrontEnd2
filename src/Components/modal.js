'use strict';
import React, { Component } from 'react';
import DropzoneComp from "./upload.js"
import Stores from '../store/stores.js';
import $ from 'jquery'
import { toast } from 'react-toastify';
import GlobalStore from '../store/store_global.js'
import { Link } from 'react-router-dom'

function PhotoUpload(props) {
    return (
        <div className="modal fade" id="update-header-photo" aria-hidden="true" style={{ display: 'none', position: "fixed", top: "30%" }}>
            <div className="modal-dialog ui-block window-popup update-header-photo">
                <a className="close icon-close" aria-label="Close" href="#" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title">
                    <h6 className="title">Update One Photo</h6>
                </div>
                <DropzoneComp />
            </div>
        </div>
    )
}

function AddTag(props) {
    return (
        <div className="modal fade" id="add-tag" aria-hidden="true" style={{ display: 'none', top: "30%", width: "20%", left: "40%" }}>
            <div className="modal-dialog ui-block window-popup">
                <a className="close icon-close" aria-label="Close" href="/" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title" style={{ borderBottom: "0px", paddingLeft: "5%" }}>
                    <h6 className="title">Add One Tag</h6>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <input type="text" id="modal-input" placeholder="#Tag" style={{ paddingLeft: "5%", height: "60%" }} />
                        </div>
                        <div className="col-md-4" >
                            <button type="button" className="btn btn-success" data-dismiss="modal" style={{ paddingLeft: "5%", height: "60%" }} onClick={function addtag() { Stores.HomepageStore.tagStatus($('#modal-input').val()); $("#modal-input").val("") }}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1, options: [<input class="form-control" id={"option1"} placeholder="Option" />] };
    }
    addOption() {
        this.setState((preState, props) => ({ num: preState.num + 1, options: preState.options.concat([<input class="form-control" id={"option" + (preState.num + 1).toString()} placeholder="Add Your Option" />]) }))
    }
    deleteOption() {
        if (this.state.num >= 1) {
            let tem = this.state.options
            tem.pop()
            this.setState((preState, props) => ({ num: preState.num - 1, options: tem }))
        }

    }
    submit() {
        let result = []
        for (var i = 1; i <= this.state.num; i++) {
            result.push($('#option' + i.toString()).val())
        }
        Stores.HomepageStore.poll = result
        console.log(result)
    }
    render() {
        return (
            <div className="modal fade" id="poll" aria-hidden="true" style={{ display: 'none', top: "30%", width: "50%", left: "25%" }}>
                <div className="modal-dialog ui-block window-popup">
                    <a className="close icon-close" aria-label="Close" href="/" data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-close-icon" /></svg>
                    </a>
                    <div className="ui-block-title" style={{ borderBottom: "0px", paddingLeft: "5%" }}>
                        <h6 className="title">Create Your Poll</h6>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Your Question</label>
                            <input class="form-control" id="question" placeholder="Your Question" />
                        </div>
                        {}
                        <div class="form-group">
                            {this.state.options}
                        </div>
                        <button type="button" className="btn btn-success" style={{ paddingLeft: "5%", height: "60%" }} onClick={() => this.addOption()}>Add Option</button>
                        <button type="button" className="btn btn-success" style={{ paddingLeft: "5%", height: "60%" }} onClick={() => this.deleteOption()}>Delete Option</button>
                        <button type="button" className="btn btn-success" style={{ paddingLeft: "5%", height: "60%" }} onClick={() => this.submit()}>Submit</button>
                    </form>
                </div>
            </div>);
    }
}

function CommentForm(props) {
    return (
        <div className="modal fade" id="commentform" aria-hidden="true" style={{ display: 'none', top: "30%", width: "30%", left: "35%" }}>
            <div className="modal-dialog ui-block window-popup">
                <a className="close icon-close" aria-label="Close" href="/" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <form className="comment-form inline-items">
                    <div className="post__author author vcard inline-items">
                        <img className="img-responsive" alt="author" src={GlobalStore.accounts.avatar} />
                        <div className="form-group with-icon-right is-empty">
                            <textarea id="commentforminput" className="form-control" placeholder="" />
                            <span className="material-input" /></div>
                    </div>

                </form>
                <Link to={"/homepage/" + GlobalStore.accounts.id}>
                    <button type="button" data-dismiss="modal" className="btn btn-sm btn-primary" style={{width: "20%", left: "40%" }} onClick={function newComment() { Stores.HomepageStore.postStatus($('#commentforminput').val(), false); $('#commentforminput').val("") }}>Comment</button>
                </Link>
            </div>
        </div>
    )
}
class Modals extends Component {
    render() {
        return (
            <div>
                <PhotoUpload />
                <AddTag />
                <Poll />
                <CommentForm />
            </div>
        );
    }
}

export default Modals 
