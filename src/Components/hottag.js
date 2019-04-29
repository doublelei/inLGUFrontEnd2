'use strict';
import React, { Component } from 'react';

function Tag(props) {
    const tags = props.tags.map((tag, index) =>
        <span key={index} className="badge badge-pill badge-success" style={{ margin: "0px 2px 2px 2px", fontWeight: "400", fontSize: "100%" }} ><font color="#F8F8F8">{tag}</font>
        </span>);
    return (
        <div style={{ margin: "2px 2px 2px 2px" }}>
            {tags}
        </div>)
}


const tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"]

class Hottags extends Component {
    render() {
        return (
            <div className="ui-block">
                <div className="ui-block-title">
                    <h6 className="title">Hot Tags</h6>
                </div>
                <div className="ui-block-content" style={{ padding: "5px 10px 5px 10px" }}>
                    <Tag tags={this.props.hot_tag} />
                </div>
            </div>
        );
    }
}

export default Hottags;