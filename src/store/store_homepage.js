import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global.js'
import { toast } from 'react-toastify';
import Stores from './stores.js';

class HomepageStore {
    time_stamp={
        timestamp: Date.parse(new Date())
    };

    last_time_stamp={
        timestamp: Date.parse(new Date())
    };

    status_list = [
         {
            "account": {
                "avatar": "/../../public/img/author-page.jpg ",
                "bio": null,
                "created_at": "2019-04-24 23:06:09.602079",
                "display_name": "Kenneth Anderson",
                "followers_count": 0,
                "following_count": 0,
                "id": "5d99a381-8860-4031-9fab-daf8c1179ad2",
                "statuses_count": 7,
                "url": "None/api/v1/accounts/5d99a381-8860-4031-9fab-daf8c1179ad2",
                "username": "Kenneth Anderson"
            },
            "content": "Determine both fly simply.",
            "created_at": "Wed, 24 Apr 2019 23:06:42 GMT",
            "id": "47ce4ac3-9a26-406c-84ff-69bb2d1073b2",
            "in_repley_to_account_id": null,
            "in_reply_to_id": null,
            "language": "zh-cn",
            "likes_count": 10,
            "img": "./../../public/img/author-page.jpg ",
            "pinned": false,
            "poll": null,
            "replies_count": 25,
            "tags": ["hot_tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7"
            ],
            "url": "None/api/v1/statuses/47ce4ac3-9a26-406c-84ff-69bb2d1073b2",
            "comments":[]
        }];

    hot_tag = ["hot_tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"];
    activity_feed = [{ "avatar": "../../public/img/author-page.jpg ", "name": "Marina Polson", "action": "commented", "targetname": "Jason Mark" }, { "avatar": "../../public/img/author-page.jpg ", "name": "Marina Polson", "action": "commented", "targetname": "Jason Mark" }];
    notification = [];

    modal_id = ''

    weather_info = {};

    new_status = {
        
    };

    like = {
        status_id: '',
        account_id: Stores.GlobalStore.accounts.id
    };

    undo_like ={
        
    };

    show_status_under_tag = '';

    add_tag = {
        status_id: '',
        tag_name: ''
    };

    newComment(comment){
        
    };

    deletStatus(){
        this.status_list.shift()
    };

    timelinesPublic() {
        fetch(Stores.GlobalStore.basicURL + "/timelines/public", {
            method: 'GET',
            body: JSON.stringify(this.time_stamp),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .then(function(res){this.status_list = this.status_list.concat(res)})
          .catch(function(error){toast.error("Get Timelines Failed"); console.log('Load Timelines Error:', error)})
    };

    loadMoreTimelines(){
        fetch(Stores.GlobalStore.basicURL + "/timelines/public", {
            method: 'GET',
            body: JSON.stringify(this.last_time_stamp),
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .then(function(res){this.status_list = this.status_list.concat(res)})
          .catch(function(error){toast.error("Load More Timelines Failed"); console.log('Load More Timelines Error:', error)})
    }

    getHotTags() {
        fetch(Stores.GlobalStore.basicURL + "/tags/")
          .then(function(res){this.hot_tag = res})
          .catch(function(error){toast.error("Get Hot Tags Failed"); console.log('Get Hot Tag Error:', error)})
    };


    showStatusUnderTag() {
        fetch(Stores.GlobalStore.basicURL + "/timelines/tag/" + this.show_status_under_tag)
        .then(res => res.json())
        .then(response => {
            this.status_list = response
        })
        .catch(error => {
            console.log("Show Statuses under Tag failed")
        })
    };

    tagStatus(tagname) {
        this.status_list[0].tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "a sample tag"]
        fetch(Stores.GlobalStore.basicURL + "/statuses/" + this.add_tag + "/tag/new",
        {
            method: 'POST',
            body: JSON.stringify(this.add_tag),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(response => {console.log('Success:', response); toast.success("Add tag succeed")})
        .catch(error => {console.error('Error:', error); toast.error("Add tag failed")})
    };

    postStatus() {
        this.status_list.push(this.new_status)
        fetch(Stores.GlobalStore.basicURL + "/statuses",
        {
            method: 'POST',
            body: JSON.stringify(this.new_status),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(response => {console.log('Success:', response); toast.success("Posted")})
        .catch(error => {console.error('Error:', error); toast.error("Posted failed")})
    };

    likeStatus(status_id) {
        fetch(Stores.GlobalStore.basicURL + "/statuses/" + status_id + "/like",
        {
            method: 'POST',
            body: JSON.stringify(this.like),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(function(res){})
        .catch(function(error){toast.error("Like Status Failed"); console.log('List Status Error:', error)})
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
        .then(response => {console.log('Success:', response); toast.success("Unliked")})
        .catch(error => {console.error('Error:', error); toast.error("Unliked failed")})

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