'use strict';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="header-spacer"></div>
                <div className="jumbotron">
                    <h1 className="display-3">404 Not Found</h1>
                    <p className="lead">This is not the webpage you are looking for.</p>
                    <hr className="my-4" />
                    <p>Click the button to Home.</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" role="button" to="/">Take Me Home</Link>
                    </p>
                </div>

            </div>
        );
    }
}

export default NotFound;