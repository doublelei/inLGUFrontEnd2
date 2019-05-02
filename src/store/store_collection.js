import { observable, action, decorate } from 'mobx';
import GlobalStore from './store_global.js'
import { toast } from 'react-toastify';

class CollectionStore {
    status_list = [
        {
            "account": { "id":"123", "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
            "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm",
            "comments": [{
                "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 10, "chidren": [{
                    "account": { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg " }, "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.", "likes_count": "18", "replies_count": "20",
                    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag", "very long tag"], "created_at": "March 8 at 6:42pm", "replies_count": 0, "chidren": []
                }]
            }]
        }];
    getCollection() {
        fetch(GlobalStore.basicURL + "/collections",
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(GlobalStore.accounts.id + ":" + "unused")
            })
        })
        .then(resp => resp.json())
        .then(repos => {this.status_list = repos.data})
        .catch(ex => {console.error(ex); toast.error("Get Collections Failed")})
    }
};

decorate(CollectionStore, {
    status_list: observable,
    getCollection: action
})

export default CollectionStore;