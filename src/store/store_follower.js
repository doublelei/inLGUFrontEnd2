import { observable, action, decorate } from 'mobx';
import GlobalStore from '../store/store_global.js'
class FollowerStore {
    accounts = [];
    
    getfollower() {
        fetch(GlobalStore.basicURL + "/accounts/" + GlobalStore.accounts.id + "/followers")
        .then(res => res.json())
        .then(res => console.log(res))
        .then(response => {
            this.accounts = response.data
        })
        .catch(error => {
            console.log("error.response.data.message")
        })
    }

    follow() {
        return
    }
}

decorate(FollowerStore, {
    accounts: observable,
    getfollower: action
})

export default FollowerStore;