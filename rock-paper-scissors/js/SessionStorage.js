class SessionStorage{
    constructor(){
        this.localStorage = window.sessionStorage;
    }

    get(key){
        return this.localStorage.getItem(key);
    }

    put(key,object){
        this.localStorage.setItem(key,object);
    }

    remove(key){
        this.localStorage.removeItem(key);
    }
};