class LocaleModel {
    
    constructor(store,language){
        this.store = store
        this.language = language
        this.getDefaultLanguage();
    }

    getDefaultLanguage(){
        if(this.store.get('Default-Language')===undefined || this.store.get('Default-Language')===null){
            this.currentLocale = 'en';
        }else{
            this.currentLocale = this.store.get('Default-Language')
        }
        return this.currentLocale
    }

    getCurrentLanguage(val){return this.language[this.currentLocale][val]}

    changeLocale(){
        switch (this.currentLocale) {
            case 'en':
                this.currentLocale='sv'
                break;
        
            case 'sv':
                this.currentLocale='en'
                break;
        }
        this.store.put('Default-Language',this.currentLocale);
    }
}