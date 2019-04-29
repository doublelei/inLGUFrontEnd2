import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global.js'
import { toast } from 'react-toastify';

class HomepageStore {
    accounts = {
        "username": "Leo",
        "avatar": "/img/avatar-test.jpg",
        "following_count": 0,
        "followers_count": 0,
        "id" : "177ceaca-7a91-40fa-a01c-6d09f98c7890"
    };

    status_list = [
        {
            "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20", "img": "./../../public/img/author-page.jpg ",
            "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm",
            "comments": [{
                "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 10, "chidren": [{
                    "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 0, "chidren": []
                }]
            }]
        }, {
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
        "account": this.accounts, "content": "", "likes_count": "0", "replies_count": "0",
        "tags": [],
        "comments": [],
        "img": "./img/last-photo1.jpg",
        "created_at": "Just Now"
    };

    // like = {
    //     account_id: globalstore.accounts.id,
    //     status_id: ''
    // };

    // undo_like ={
    //     account_id: globalstore.accounts.id,
    //     status_id: ''
    // };

    // show_status_under_tag = '';

    // add_tag = {
    //     status_id: '',
    //     tag_name: ''
    // };
    newComment(comment){
        this.status_list[0].comments = [{
            "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
            "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 10, "chidren": [{
                "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 0, "chidren": []
            }]
        }, {
            "account": this.accounts, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.123", "likes_count": "0", "replies_count": "0",
            "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "Just Now", "replies_count": 0, "chidren": []
        }]
    };
    deletStatus(){
        this.status_list.shift()
    };
    timelinesPublic() {
        // fetch(globalstore.basicURL + "/timelines/public", { mode: 'no-cors' })
        //     .then(res => res.json())
        //     .then(response => {
        //         this.status_list = response
        //     })
        //     .catch(error => {
        //         console.log("getTimeLinePublic failed")
        //     })
    };
    getHotTags() {
        // fetch(globalstore.basicURL + "/tags/", { mode: 'no-cors' })
        //     .then(res => res.json())
        //     .then(response => {
        //         this.hot_tag = response
        //     })
        //     .catch(error => {
        //         console.log("getHotTags failed")
        //     })
    };


    showStatusUnderTag() {
        // fetch(globalstore.basicURL + "/timelines/tag/" + this.show_status_under_tag)
        // .then(res => res.json())
        // .then(response => {
        //     this.status_list = response
        // })
        // .catch(error => {
        //     console.log("Show Statuses under Tag failed")
        // })
    };

    tagStatus(tagname) {
        this.status_list[0].tags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "a sample tag"]

        // fetch(globalstore.basicURL + "/statuses/" + this.add_tag + "/tag/new",
        // {
        //     method: 'POST',
        //     body: JSON.stringify(this.add_tag),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // }).then(res => res.json())
        // .then(response => {console.log('Success:', response); toast.success("Add tag succeed")})
        // .catch(error => {console.error('Error:', error); toast.error("Add tag failed")})
    };

    postStatus() {
        this.status_list.push(this.new_status)
        // fetch(globalstore.basicURL + "/statuses",
        // {
        //     method: 'POST',
        //     body: JSON.stringify(this.new_status),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // }).then(res => res.json())
        // .then(response => {console.log('Success:', response); toast.success("Posted")})
        // .catch(error => {console.error('Error:', error); toast.error("Posted failed")})
    };

    likeStatus() {
        this.status_list[0].likes_count = "19"
        this.status_list[0].likes_count = "19"
        this.status_list[0].likes_count = "19"
        this.status_list[0].likes_count = "19"
    };

    undoLikeStatus() {
        // fetch(this.basicURL + "/status/" + this.like_status + "/undo_like",
        // {
        //     method: 'POST',
        //     body: JSON.stringify(this.undo_like),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // }
        // ).then(res => res.json())
        // .then(response => {console.log('Success:', response); toast.success("Unliked")})
        // .catch(error => {console.error('Error:', error); toast.error("Unliked failed")})

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