import { observable, action, decorate } from 'mobx';
import { toast } from 'react-toastify';
import GlobalStore from './store_global.js';

class HomepageStore {
    time_stamp = {
        timestamp: Date.parse(new Date())
    };

    last_time_stamp = {
        timestamp: Date.parse(new Date())
    };

    poll = []

    options = []

    status_list = [{
        "id": '123',
        "url": '',
        "account": {
            "id": '',
            "username": 'Santa',
            "display_name": 'Santa',
            "created_at": '0000-00-00',
            "bio": '',
            "followers_count": '123',
            "following_count": '123',
            "statuses_count": '123',
            "url": '123',
            "avatar": ''
        },
        "in_reply_to_id": '',
        "in_repley_to_account_id": '',
        "language": '',
        "content": 'Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!',
        "created_at": '1991-12-24',
        "replies_count": 2,
        "replies": [{
            "id": '1234',
            "url": '',
            "account": {
                "id": '',
                "username": 'hhh',
                "display_name": 'Santa',
                "created_at": '0000-00-00',
                "bio": '',
                "followers_count": '123',
                "following_count": '123',
                "statuses_count": '123',
                "url": '123',
                "avatar": ''
            },
            "in_reply_to_id": '123',
            "in_repley_to_account_id": '',
            "language": '',
            "content": 'Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!',
            "created_at": '1991-12-24',
            "replies_count": 1,
            "replies": [{
                "id": '1234',
                "url": '',
                "account": {
                    "id": '',
                    "username": 'Sfsfsd',
                    "display_name": 'Santa',
                    "created_at": '0000-00-00',
                    "bio": '',
                    "followers_count": '123',
                    "following_count": '123',
                    "statuses_count": '123',
                    "url": '123',
                    "avatar": ''
                },
                "in_reply_to_id": '123',
                "in_repley_to_account_id": '',
                "language": '',
                "content": 'Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!',
                "created_at": '1991-12-24',
                "replies_count": 1,
                "replies": [{
                    "id": '',
                    "url": '',
                    "account": {
                        "id": '',
                        "username": 'gfasfas',
                        "display_name": 'Santa',
                        "created_at": '0000-00-00',
                        "bio": '',
                        "followers_count": '123',
                        "following_count": '123',
                        "statuses_count": '123',
                        "url": '123',
                        "avatar": ''
                    },
                    "in_reply_to_id": '1234',
                    "in_repley_to_account_id": '',
                    "language": '',
                    "content": 'Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!',
                    "created_at": '1991-12-24',
                    "replies_count": 0,
                    "replies": [],
                    "likes_count": '123',
                    "media_attachments": "",
                    "tags": [],
                    "poll": null,
                    "liked": true,
                    "pinned": ''
                }],
                "likes_count": '123',
                "media_attachments": "",
                "tags": [],
                "poll": null,
                "liked": true,
                "pinned": ''
            }],
            "likes_count": '123',
            "media_attachments": "",
            "tags": [],
            "poll": null,
            "liked": true,
            "pinned": ''
        }, {
            "id": '',
            "url": '',
            "account": {
                "id": '',
                "username": 'sdgsdfs',
                "display_name": 'Santa',
                "created_at": '0000-00-00',
                "bio": '',
                "followers_count": '123',
                "following_count": '123',
                "statuses_count": '123',
                "url": '123',
                "avatar": ''
            },
            "in_reply_to_id": '1234',
            "in_repley_to_account_id": '',
            "language": '',
            "content": 'Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!',
            "created_at": '1991-12-24',
            "replies_count": 0,
            "replies": [],
            "likes_count": '123',
            "media_attachments": "",
            "tags": [],
            "poll": null,
            "liked": true,
            "pinned": ''
        }],
        "likes_count": '123',
        "media_attachments": "",
        "tags": [],
        "poll": {"voted": true, "options": [{"title": "12334", "votes_count": "16%"}, {"title": "123145", "votes_count": "62%"}]},
        "liked": true,
        "pinned": ''
    }, {
        "id": '12333',
        "url": '',
        "account": {
            "id": '',
            "username": 'fdgdf',
            "display_name": 'Santa',
            "created_at": '0000-00-00',
            "bio": '',
            "followers_count": '123',
            "following_count": '123',
            "statuses_count": '123',
            "url": '123',
            "avatar": ''
        },
        "in_reply_to_id": '',
        "in_repley_to_account_id": '',
        "language": '',
        "content": 'Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!Merry Christmas!',
        "created_at": '1991-12-24',
        "replies_count": 0,
        "replies": [],
        "likes_count": '123',
        "media_attachments": "",
        "tags": [],
        "poll": null,
        "liked": true,
        "pinned": ''
    }];

    hot_tag = []
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
        in_reply_to_id: '',
        poll_options: []
    };

    attachment = { file: '', status_id: '869a4cd1-cdb7-4186-b4fe-79e216a8835c' };

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

    collect_status = {
        status_id: '',
        account_id: ''
    }

    collectStatus(status_id) {
        this.collect_status.status_id = status_id;
        this.collect_status.account_id = GlobalStore.accounts.id
        fetch(GlobalStore.basicURL + "/statuses/" + status_id + "/collect",
            {
                method: 'POST',
                body: JSON.stringify(this.collect_status),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(function (res) { toast.success("Status Collected") })
            .catch(function (error) { toast.error("Like Status Failed"); console.log('List Status Error:', error) })

    };

    deletStatus(status_id) {
        this.delete_status.status_id = status_id;
        this.delete_status.account_id = GlobalStore.accounts.id
        fetch(GlobalStore.basicURL + "/statuses/" + status_id + "/delete",
            {
                method: 'POST',
                body: JSON.stringify(this.delete_status),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(function (res) { })
            .then(toast.warn("Deleted"))
            .then(this.timelinesPublic())
            .catch(function (error) { toast.error("Like Status Failed"); console.log('List Status Error:', error) })

    };

    timelinesPublic() {
        fetch(GlobalStore.basicURL + '/timelines/public',
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(resp => resp.json())
            .then(repos => { this.status_list = repos.data })
            .catch(ex => { console.error(ex); toast.error("Get Timeline Failed") })
    };

    uploadAttachment() {
        fetch(GlobalStore.basicURL + "/attachments/add",
            {
                method: 'POST',
                body: JSON.stringify(this.attachment),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
    }

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
        fetch(GlobalStore.basicURL + "/hot_tags/10", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(res => this.hot_tag = res.data)
            .catch(function (error) { toast.error("Get Hot Tags Failed"); console.log('Get Hot Tag Error:', error) })
    };

    getAllStatusIn(tag_name) {
        fetch(GlobalStore.basicURL + '/timelines/tag/' + tag_name,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(resp => resp.json())
            .then(repos => { this.status_list = repos.data })
            .catch(ex => { console.error(ex); toast.error("Get Timeline by Tag Failed") })
    }


    // tag_id will be set when the + button is clicked
    tagStatus(tag_name) {
        this.add_tag.tag_name = tag_name;
        fetch(GlobalStore.basicURL + "/statuses/" + this.add_tag.status_id + "/tag/new",
            {
                method: 'POST',
                body: JSON.stringify(this.add_tag),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(function (res) { toast.success("Add Tag Succeed") })
            .then(this.timelinesPublic())
            .catch(function (error) { toast.error("Add Tag Failed"); console.log('Add Tag Error:', error) })
    };

    postStatus(content, anonymous) {
        if (this.poll.length > 0) {
            this.new_status.content = this.poll[0]
            for (var i = 1; i < this.poll.length; i++) {
                this.new_status.poll_options.push({"title": this.poll[i]})
            }
        } else {
            this.new_status.content = content;
        }
        this.new_status.anonymous = anonymous;
        this.new_status.account_id = GlobalStore.accounts.id;
        fetch(GlobalStore.basicURL + "/statuses",
            {
                method: 'POST',
                body: JSON.stringify(this.new_status),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            }).then(res => res.json())
            .then(response => { console.log('Success:', response); toast.success("Posted") })
            .then(this.new_status.poll_options = [])
            .then(this.poll = [])
            // .then(this.uploadAttachment())
            .then(this.timelinesPublic())
            .catch(error => { console.error('Error:', error); toast.error("Posted failed") })
    };

    likeStatus(status_id) {
        this.like.status_id = status_id;
        this.like.account_id = GlobalStore.accounts.id;
        console.log(GlobalStore.accounts.id);
        fetch(GlobalStore.basicURL + "/statuses/" + status_id + "/like",
            {
                method: 'POST',
                body: JSON.stringify(this.like),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(response => { console.log('Success:', response); toast.success("Liked") })
            .then(this.timelinesPublic())
            .catch(function (error) { toast.error("Like Status Failed"); console.log('Error:', error) })
    };

    undoLikeStatus(status_id) {
        this.like.status_id = status_id;
        this.like.account_id = GlobalStore.accounts.id;
        fetch(GlobalStore.basicURL + "/statuses/" + status_id + "/undo_like",
            {
                method: 'POST',
                body: JSON.stringify(this.undo_like),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            }
        )
            .then(response => { console.log('Success:', response); toast.success("Unliked") })
            .then(this.timelinesPublic())
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


    collectStatus: action,
    deletStatus: action,
    timelinesPublic: action,
    getHotTags: action,
    getAllStatusIn: action,
    tagStatus: action,
    postStatus: action,
    likeStatus: action,
    undoLikeStatus: action
})

export default HomepageStore;