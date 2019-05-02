import { observable, action, decorate } from 'mobx';
import { toast } from 'react-toastify';
import GlobalStore from './store_global.js';

class otherPageStore {
    time_stamp = {
        timestamp: Date.parse(new Date())
    };

    last_time_stamp = {
        timestamp: Date.parse(new Date())
    };

    status_list = [];

    modal_id = ''

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

    accounts = {
    };

    getAccounts(id) {
        fetch(GlobalStore.basicURL + "/accounts/" + id, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
            })
        })
        .then(
            resp => resp.json()
        ).then(repos => {
            this.accounts = repos
        }).catch(ex => {
            console.error(ex);
        })
    }

    getComment(status_id) {
        fetch(GlobalStore.basicURL + "/statuses/" + status_id + "/context").then(
            resp => resp.json()
        ).then(repos => {
            return repos.descendants
        }).catch(ex => {
            console.error(ex);
        })
    }

    deletStatus(status_id) {
        this.delete.status_id = status_id;
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
            .then(this.loadMoreTimelines())
            .catch(function (error) { toast.error("Like Status Failed"); console.log('List Status Error:', error) })

    };

    timelinesAccounts() {
        fetch(GlobalStore.basicURL + "/accounts/" + this.accounts.id + "/statuses",
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
            })
        })
        .then(resp => resp.json())
        .then(repos => {this.status_list = repos.data; console.log(repos.data)})
        .catch(ex => {console.error(ex); toast.error("Get Timeline Failed")})
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

    showStatusUnderTag(tag) {
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
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            })
            .then(function (res) { toast.success("Add Tag Succeed"); this.timelinesPublic() })
            .catch(function (error) { toast.error("Add Tag Failed"); console.log('Add Tag Error:', error) })
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
            .then(function (res) { })
            .catch(function (error) { toast.error("Like Status Failed"); console.log('List Status Error:', error) })
    };

    undoLikeStatus(status_id) {
        this.like.status_id = status_id;
        this.like.account_id = GlobalStore.accounts.id;
        fetch(this.basicURL + "/status/" + this.like_status + "/undo_like",
            {
                method: 'POST',
                body: JSON.stringify(this.undo_like),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            }
        ).then(res => res.json())
            .then(response => { console.log('Success:', response); toast.success("Unliked") })
            .catch(error => { console.error('Error:', error); toast.error("Unliked failed") })
    };

    follow() {
        fetch(this.basicURL + "/accounts/" + this.accounts.id + "/follow",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
                })
            }
        ).then(res => res.json())
            .then(response => { console.log('Success:', response); toast.success("Follow") })
            .catch(error => { console.error('Error:', error); toast.error("Follow failed") })
    };
}

decorate(otherPageStore, {
    accounts: observable,
    status_list: observable,
    like: observable,
    undo_like: observable,
    new_status: observable,
    show_status_under_tag: observable,
    add_tag: observable,
    deletStatus: action,
    timelinesAccounts: action,
    getHotTags: action,
    showStatusUnderTag: action,
    tagStatus: action,
    postStatus: action,
    likeStatus: action,
    undoLikeStatus: action
})

const OtherPageStore = new otherPageStore()

export default OtherPageStore;
