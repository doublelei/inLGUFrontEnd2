'use strict';
import React, { Component } from 'react';
import DropzoneComp from "./upload.js"
import Stores from '../store/stores.js';
import $ from 'jquery'
import { toast } from 'react-toastify';

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
                            <button type="button" className="btn btn-success" data-dismiss="modal" style={{paddingLeft:"5%", height:"60%"}} onClick={function addtag(){Stores.HomepageStore.tagStatus($('#modal-input').val()); $("#modal-input").val("")}}>Submit</button>
                        </div>
                    </div>
                </div>

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
            </div>
        );
    }
}

export default Modals 
