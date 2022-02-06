// //  Dependency inversion principle

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        // return localStorage.getItem('key')
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('google.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet() {
        return this.localStorage.get('key')
    }
}

class Database {
    constructor(client) {
  this.client = client
    }

    getData(key) {
return this.client.clientGet(key)
    }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'));