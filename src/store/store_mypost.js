import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global.js'
import { toast } from 'react-toastify';
class MyPostStore {
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
                    "poll": '',
                    "liked": true,
                    "pinned": ''
                }],
                "likes_count": '123',
                "media_attachments": "",
                "tags": [],
                "poll": '',
                "liked": true,
                "pinned": ''
            }],
            "likes_count": '123',
            "media_attachments": "",
            "tags": [],
            "poll": '',
            "liked": true,
            "pinned": ''
        }, {
            "id": '',
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
            "poll": '',
            "liked": true,
            "pinned": ''
        }],
        "likes_count": '123',
        "media_attachments": "",
        "tags": [],
        "poll": '',
        "liked": true,
        "pinned": ''
    }, {
        "id": '12333',
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
        "replies_count": 0,
        "replies": [],
        "likes_count": '123',
        "media_attachments": "",
        "tags": [],
        "poll": '',
        "liked": true,
        "pinned": ''
    }];
    getMyPost() {
        fetch(GlobalStore.basicURL + "/accounts/" + GlobalStore.accounts.id + "/statuses",
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
            })
        })
        .then(resp => resp.json())
        .then(repos => {this.status_list = repos.data})
        .catch(ex => {console.error(ex); toast.error("Get My Posts Failed")})
    }
};

decorate(MyPostStore, {
    status_list: observable,
    getMyPost: action
})

export default MyPostStore;