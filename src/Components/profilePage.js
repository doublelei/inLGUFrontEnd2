'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js'
import Settings from './settings.js'
import { observer, inject } from "mobx-react";
import { match, query } from 'react-router-dom'
import { toast } from 'react-toastify';
import GlobalStore from '../store/store_global.js'

function SideMenu(props){
    return (
        <div className="profile-settings-responsive">
            <a className="js-profile-settings-open profile-settings-open" href="#">
                <i className="fa fa-angle-right" aria-hidden="true" />
                <i className="fa fa-angle-left" aria-hidden="true" />
            </a>
            <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="1d8e8027-71b5-366f-a0a6-21b2f09b2626">
                <div className="ui-block">
                    <div className="your-profile">
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">Your PROFILE</h6>
                        </div>
                        <div id="accordion1" role="tablist" aria-multiselectable="true">
                            <div className="card">
                                <div className="card-header" id="headingOne-1" role="tab">
                                    <h6 className="mb-0">
                                        <a aria-expanded="true" aria-controls="collapseOne" href="#collapseOne-1" data-toggle="collapse" data-parent="#accordion">
                                            Profile Settings
                  <svg xmlns="http://www.w3.org/2000/svg" className="olymp-dropdown-arrow-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../../public/icons/icons.svg#olymp-dropdown-arrow-icon" /></svg>
                                        </a>
                                    </h6>
                                </div>
                                <div className="collapse show" id="collapseOne-1" role="tabpanel" aria-labelledby="headingOne">
                                    <ul className="your-profile-menu">
                                        <li>
                                            <a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
                                        </li>
                                        <li>
                                            <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                        </li>
                                        <li>
                                            <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                                        </li>
                                        <li>
                                            <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                                        </li>
                                        <li>
                                            <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ui-block-title">
                            <a className="h6 title" href="33-YourAccount-Notifications.html">Notifications</a>
                            <a className="items-round-little bg-primary" href="#">8</a>
                        </div>
                        <div className="ui-block-title">
                            <a className="h6 title" href="34-YourAccount-ChatMessages.html">Chat / Messages</a>
                        </div>
                        <div className="ui-block-title">
                            <a className="h6 title" href="35-YourAccount-FriendsRequests.html">Friend Requests</a>
                            <a className="items-round-little bg-blue" href="#">4</a>
                        </div>
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">FAVOURITE PAGE</h6>
                        </div>
                        <div className="ui-block-title">
                            <a className="h6 title" href="36-FavPage-SettingsAndCreatePopup.html">Create Fav Page</a>
                        </div>
                        <div className="ui-block-title">
                            <a className="h6 title" href="36-FavPage-SettingsAndCreatePopup.html">Fav Page Settings</a>
                        </div>
                    </div>
                </div>
                <div className="ps__scrollbar-x-rail" style={{ left: 0, bottom: 0 }}><div tabIndex={0} className="ps__scrollbar-x" style={{ left: 0, width: 0 }} /></div><div className="ps__scrollbar-y-rail" style={{ top: 0, height: 656, right: 0 }}><div tabIndex={0} className="ps__scrollbar-y" style={{ top: 0, height: 655 }} /></div></div>
        </div>

    )
}

class _Profile extends Component {
    componentWillMount(){
        GlobalStore.accounts.id = this.props.match.params.id;
        GlobalStore.getCurrentUser();
    }
    render() {
        return (
            <div>
                <NavBar {...GlobalStore} />
                <div className="header-spacer header-spacer-small" />
                <SideMenu />
                <Settings {...GlobalStore}/>
            </div>
        );
    }
}

const Profile = observer(_Profile)

export default Profile