class LocalStorage{
    /**
     * Initialize Local Storage
     */
    constructor(){
        this.localStorage = window.localStorage;
    }
    /**
     * Get value from Local Storage
     * @param {*} key 
     * @returns the value of Key
     */
    get(key){
        return this.localStorage.getItem(key);
    }

    /**
     * Put value into Local Storage
     * @param {*} key 
     */
    put(key,object){
        this.localStorage.setItem(key,object);
    }

};