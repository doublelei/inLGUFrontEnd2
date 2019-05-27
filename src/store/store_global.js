import { observable, action, decorate } from 'mobx';
import { toast } from 'react-toastify';

class globalStore {
    basicURL = "http://10.30.49.57:5000/api/v1";
    
    notification = [{ "username": "Min Tian", "avatar": "/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }, { "username": "Min Tian", "avatar": "/img/author-page.jpg ", "time": "4 hours ago", "action": "commented" }];
    token = ""
    accounts = {
        "id": "5a1ae50e-024b-4c17-ae15-531f76b84d12",
        "username": "leo",
        "display_name": "",
        "created_at": "",
        "bio": "a simple biography",
        "followers_count": "34",
        "following_count": "56",
        "statuses_count": "55",
        "url": "",
        "avatar": "/img/author-page.jpg ",
    };
    getCurrentUser() {
        fetch(this.basicURL + "/accounts/" + this.accounts.id, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(this.accounts.id + ":" + "unused")
            })
        })
            .then(
                resp => resp.json()
            )
            .then(repos => {
                this.accounts = repos;
                toast.success("Login Succeed")
            })
            .catch(function (error) { console.log('Error:', error); toast.error("Login Failed") })
    };

    updateCredential() {
        fetch(this.basicURL + "/accounts/update_credentials", {
            method: 'PATCH',
            body: JSON.stringify(this.accounts),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(this.accounts.id + ":" + "unused")
            })
        })
            .then(function (res) { toast.success("Updated Succeed") })
            .catch(function (error) { toast.error("Updated Failed"); console.log('Error:', error) })
    }

    
}


decorate(globalStore, {
    token: observable,
    notification: observable,
    accounts: observable,
    getCurrentUser: action
})

const GlobalStore = new globalStore()

export default GlobalStore;