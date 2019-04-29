import { observable, action, decorate } from 'mobx';

class GlobalStore {
    basicURL = "http://127.0.0.1:5000/api/v1";
    notification = [{ "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg ", "time": "4 hours ago", "action": "commented" }, { "username": "Min Tian", "avatar": "/../../public/img/author-page.jpg ", "time": "4 hours ago", "action": "commented" }];
    accounts = {
        "username": "Min Tian",
        "avatar": "/../../public/img/author-page.jpg ",
        "following_count": 87,
        "followers_count": 96,
        "id" : "177ceaca-7a91-40fa-a01c-6d09f98c7890"
    };
    getCurrentUser() {
        // fetch(this.basicURL + "/accounts/" + this.accounts.id)
        //     .then(res => res.json())
        //     .then(data => {
        //       this.accounts = data
        //     })
        //     .catch(e => console.log('错误:', e))
    };
    change(name) {
        this.accounts.username = name
        this.accounts.avatar='img/avatar-test.jpg'
    }
    // update(){
    //     fetch(this.basicURL + "/accounts/update_credentials",
    //     {   
    //         method: 'PATCH',
    //         body: JSON.stringify(this.accounts),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    //             'Access-Control-Allow-Credentials': 'true'
    //         })
    //     })
    // };
}   


decorate(GlobalStore, {
    notification: observable,
    accounts: observable,
    change: action,
    getCurrentUser: action
})

export default GlobalStore;