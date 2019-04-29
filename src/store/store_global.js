import { observable, action, decorate } from 'mobx';
import { toast } from 'react-toastify';
import { Base64 } from 'js-base64';

class globalStore {
    basicURL = "https://inlgu-api.rainbowsound.me/api/v1";
    notification = [{ "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg", "time": "4 hours ago", "action": "commented" }, { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg ", "time": "4 hours ago", "action": "commented" }];
    token = ""
    accounts = {
        "id": "177ceaca-7a91-40fa-a01c-6d09f98c7890",
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
        fetch(this.basicURL + "/accounts/", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Base64.encode(GlobalStore.token + ":")
            })
        }).then(
            resp => resp.json()
        ).then(repos => {
            this.accounts = repos.data;
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
                'Authorization': 'Basic ' + Base64.encode(GlobalStore.token + ":")
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