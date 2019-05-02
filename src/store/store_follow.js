import { observable, action, decorate } from 'mobx';
import GlobalStore from '../store/store_global.js'

class FollowStore {
    accounts = [];
    
    getfollowing() {
        fetch(GlobalStore.basicURL + "/accounts/" + GlobalStore.accounts.id + "/following")
        .then(res => res.json())
        .then(response => {
            this.accounts = response.data
        })
        .catch(error => {
            console.log("error.response.data.message")
        })
    }
    follower() {
        return
    }

}
decorate(FollowStore, {
    accounts: observable,
    getfollowing: action
})

export default FollowStore;