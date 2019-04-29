'use strict';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import GlobalStore from '../store/store_global'
function Background(props) {
    return (
        <div class="content-bg-wrap">
            <div class="content-bg"></div>
        </div>
    )
}

function LoginContent(props) {
    return (
        <div className="container">
            <div className="row display-flex">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="landing-content">
                        <h1>Welcome to the Social Network Made for LGU</h1>
                        <p>We are the best and biggest social network with 5 billion active users all around the world. Share you
                          thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
                        </p>
                        <a className="btn btn-md btn-border c-white" onClick={toast("Hello!")}>Register Now!</a>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="registration-login-form">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#home" role="tab" aria-expanded="false">
                                    <svg className="olymp-login-icon"><use xlinkHref="../../public/icons/icons.svg#olymp-login-icon" /></svg>
                                    <div className="ripple-container" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#profile" role="tab" aria-expanded="true">
                                    <svg className="olymp-register-icon"><use xlinkHref="../../public/icons/icons.svg#olymp-register-icon" /></svg>
                                    <div className="ripple-container" /></a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane" id="home" role="tabpanel" data-mh="log-tab" style={{}} aria-expanded="false">
                                <div className="title h6">Register to inLGU</div>
                                <form className="content">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group label-floating is-empty">
                                                <label className="control-label">First Name</label>
                                                <input className="form-control" placeholder type="text" />
                                                <span className="material-input" /></div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group label-floating is-empty">
                                                <label className="control-label">Last Name</label>
                                                <input className="form-control" placeholder type="text" />
                                                <span className="material-input" /></div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="form-group label-floating is-empty">
                                                <label className="control-label">Your Email</label>
                                                <input className="form-control" placeholder type="email" />
                                                <span className="material-input" /></div>
                                            <div className="form-group label-floating is-empty">
                                                <label className="control-label">Your Password</label>
                                                <input className="form-control" placeholder type="password" />
                                                <span className="material-input" /></div>
                                            
                                            <a href="#" className="btn btn-purple btn-lg full-width">Complete Registration!</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab" style={{}} aria-expanded="true">
                                <div className="title h6">Login to your Account</div>
                                <form className="content">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="form-group label-floating is-empty">
                                                <label className="control-label">Your Email</label>
                                                <input className="form-control" placeholder type="email" />
                                                <span className="material-input" /></div>
                                            <div className="form-group label-floating is-empty">
                                                <label className="control-label">Your Password</label>
                                                <input className="form-control" placeholder type="password" />
                                                <span className="material-input" /></div>
                                           
                                            <a href="#" className="btn btn-lg btn-primary full-width">Login</a>
                                            <div className="or" />
                                            <a href={GlobalStore.basicURL + "/login/microsoft"} className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fa " aria-hidden="true" />Login with Outlook</a>
                                            <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

class Login extends Component {
    render() {
        return (
            <body className="landing-page" data-gr-c-s-loaded="true">
                <Background />
                <div className="header-spacer"></div>
                <LoginContent />
            </body>
        );
    }
}


export default Login;