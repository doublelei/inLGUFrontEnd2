'use strict';
import React, { Component } from 'react';
import Stores from '../store/stores.js';
import { observer, inject } from "mobx-react";
function Tag(props) {
    console.log(Stores.HomepageStore.hot_tag)
    const tags = Stores.HomepageStore.hot_tag.map((tag, index) =>
        <span key={index} className="badge badge-pill badge-success" style={{ margin: "0px 2px 2px 2px", fontWeight: "400", fontSize: "100%" }} ><font color="#F8F8F8">{tag.name}</font>
        </span>);
    return (
        <div style={{ margin: "2px 2px 2px 2px" }}>
            {tags}
        </div>)
}

class _Hottags extends Component {
    render() {
        return (
            <div className="ui-block">
                <div className="ui-block-title">
                    <h6 className="title">Hot Tags</h6>
                </div>
                <div className="ui-block-content" style={{ padding: "5px 10px 5px 10px" }}>
                    <Tag tags={this.props} />
                </div>
            </div>
        );
    }
}

const Hottags = observer(_Hottags)

export default Hottags;