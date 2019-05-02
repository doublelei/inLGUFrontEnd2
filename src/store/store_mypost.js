import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global.js'
import { toast } from 'react-toastify';
class MyPostStore {
    status_list = [
        {
        "id":'',
        "url":'',
        "account":'Santa',
        "in_reply_to_id":'',
        "in_repley_to_account_id":'',
        "language":'',
        "content": 'Merry ChristmasMerry ChristmasMerry ChristmasMerry ChristmasMerry ChristmasMerry Christmas',
        "created_at": '2019-01-01',
        "replies_count":100,
        "replies":[],
        "likes_count": 100,
        "media_attachments": '',
        "tags": ["tag1", "tag2"],
        "poll": false,
        "liked": true,
        "pinned": false
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
        .then(repos => {this.tatus_list = repos.data})
        .catch(ex => {console.error(ex); toast.error("Get My Posts Failed")})
    }
};

decorate(MyPostStore, {
    status_list: observable,
    getMyPost: action
})

export default MyPostStore;