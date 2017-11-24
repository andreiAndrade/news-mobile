import { observable, action, extendObservable } from 'mobx'

class User {
    store

    @observable name = ''
    @observable picture = undefined

    constructor(store, initialState) {
        this.store = store
        extendObservable(this, initialState || {})
    }

    @action refresh() {
        this.name = ''
        this.picture = undefined
    }

    @action setName(name) {
        this.name = name
    }

    @action setPicture(picture) {
        this.picture = picture
    }
}

const user = new User({}, {})
export default user