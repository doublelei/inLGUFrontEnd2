import { observable, action, decorate } from 'mobx';
import { toast } from 'react-toastify';
import Stores from './stores.js';
import GlobalStore from './store_global.js';
import fetchJsonp from 'fetch-jsonp';
import { extendObservable } from 'mobx';
import { Base64 } from 'js-base64';

class HomepageStore {
    time_stamp = {
        timestamp: Date.parse(new Date())
    };

    last_time_stamp = {
        timestamp: Date.parse(new Date())
    };

    status_list = [];

    hot_tag = ["hot_tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"];
    activity_feed = [{ "avatar": "../../public/img/author-page.jpg ", "name": "Marina Polson", "action": "commented", "targetname": "Jason Mark" }, { "avatar": "../../public/img/author-page.jpg ", "name": "Marina Polson", "action": "commented", "targetname": "Jason Mark" }];
    notification = [];

    modal_id = ''

    weather_info = {};

    new_status = {
        content: '',
        language: "zh-cn",
        account_id: GlobalStore.accounts.id,
        pinned: false,
        anonymous: false,
        reply_to_status_id: ''
    };

    like = {
        status_id: '',
        account_id: ''
    };

    undo_like = {
        status_id: '',
        account_id: ''
    };

    delete_status = {
        status_id: '',
        account_id: ''
    };

    add_tag = {
        status_id: '',
        tag_name: ''
    };

    deletStatus() {

    };

    timelinesPublic() {
        fetch('https://inlgu-api.rainbowsound.me/api/v1/timelines/public').then(
            resp => resp.json()
        ).then(repos => {
            this.status_list = repos.data
        
            console.log(repos.data)
            console.log(this.status_list)
            // this.status_list = Object.keys(repos.data).map((keyname)=>repos.data[keyname])
        }).catch(ex => {
            console.error(ex);
        })
    };

    loadMoreTimelines() {
        fetch(GlobalStore.basicURL + "/timelines/public", {
            mode: "no-cors",
            method: 'GET',
            body: JSON.stringify(this.last_time_stamp),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(function (res) { this.status_list = this.status_list.concat(res) })
            .catch(function (error) { toast.error("Load More Timelines Failed"); console.log('Load More Timelines Error:', error) })
    }

    getHotTags() {
        fetch(GlobalStore.basicURL + "/tags/", { mode: "no-cors" })
            .then(function (res) { this.hot_tag = res })
            .catch(function (error) { toast.error("Get Hot Tags Failed"); console.log('Get Hot Tag Error:', error) })
    };


    showStatusUnderTag(tag) {
        console.log(tag)
        fetch(GlobalStore.basicURL + "/timelines/tag/" + tag)
            .then(function (res) { this.status_list = res })
            .catch(function (error) { toast.error("Get Status by Tags Failed"); console.log('Get Status by Tag Error:', error) })
    };

    // tag_id will be set when the + button is clicked
    tagStatus(tag_name) {
        this.add_tag.tag_name = tag_name;
        fetch(GlobalStore.basicURL + "/statuses/" + this.add_tag.status_id + "/tag/new",
            {
                method: 'POST',
                body: JSON.stringify(this.add_tag),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(function (res) { toast.success("Add Tag Succeed") })
            .catch(function (error) { toast.error("Add Tag Failed"); console.log('Add Tag Error:', error) })
    };

    postStatus(content, anonymous) {
        this.new_status.content = content;
        this.new_status.anonymous = anonymous;
        fetch(GlobalStore.basicURL + "/statuses",
            {
                method: 'POST',
                body: JSON.stringify(this.new_status),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json())
            .then(response => { console.log('Success:', response); toast.success("Posted") })
            .catch(error => { console.error('Error:', error); toast.error("Posted failed") })
    };

    likeStatus(status_id) {
        this.like.status_id = status_id;
        fetch(GlobalStore.basicURL + "/statuses/" + status_id + "/like",
            {
                method: 'POST',
                body: JSON.stringify(this.like),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Base64.encode(GlobalStore.token + ":")
                })
            })
            .then(function (res) { })
            .catch(function (error) { toast.error("Like Status Failed"); console.log('List Status Error:', error) })
    };

    undoLikeStatus() {
        fetch(this.basicURL + "/status/" + this.like_status + "/undo_like",
            {
                method: 'POST',
                body: JSON.stringify(this.undo_like),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        ).then(res => res.json())
            .then(response => { console.log('Success:', response); toast.success("Unliked") })
            .catch(error => { console.error('Error:', error); toast.error("Unliked failed") })

    };
}

decorate(HomepageStore, {
    status_list: observable,
    hot_tag: observable,
    activity_feed: observable,
    notification: observable,
    weather_info: observable,
    like: observable,
    undo_like: observable,
    new_status: observable,
    show_status_under_tag: observable,
    add_tag: observable,

    timelinesPublic: action,
    getHotTags: action,
    showStatusUnderTag: action,
    tagStatus: action,
    postStatus: action,
    likeStatus: action,
    undoLikeStatus: action
})

export default HomepageStore;