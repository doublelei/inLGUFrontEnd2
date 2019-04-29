import HomepageStore from './store_homepage'
import CollectionStore from './store_collection'
import FollowStore from './store_follow'
import FollowerStore from './store_follower'
import GlobalStore from './store_global'
import MyPostStore from './store_mypost'

export const Stores = {
    HomepageStore: new HomepageStore(),
    CollectionStore: new CollectionStore(),
    FollowStore: new FollowStore(),
    FollowerStore: new FollowerStore(),
    GlobalStore: new GlobalStore(),
    MyPostStore: new MyPostStore()
}

export default Stores;