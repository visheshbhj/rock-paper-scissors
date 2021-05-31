class SessionStorage{
    /**
     * Initialize Session Storage
     */
    constructor(){
        this.localStorage = window.sessionStorage;
    }
    /**
     * Get value from Session Storage
     * @param {*} key 
     * @returns the value of Key
     */
    get(key){
        return this.localStorage.getItem(key);
    }
    /**
     * Put value into Session Storage
     * @param {*} key 
     */
    put(key,object){
        this.localStorage.setItem(key,object);
    }
};