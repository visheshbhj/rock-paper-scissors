/**
 * Locale Model gets the language.
 */
class LocaleModel {
    /**
     * When initialized it sets up default language.
     * @param {*} language contains the language bindings in language.js
     */
    constructor(store,language){
        this.store = store
        this.language = language
        this.getDefaultLanguage();
    }
    /**
     * Gets value of 'Default-Language' from local store, if not found then sets to English.
     * @returns this.currentLocale which tells what current language is.
     */
    getDefaultLanguage(){
        if(this.store.get('Default-Language')===undefined || this.store.get('Default-Language')===null){
            this.currentLocale = 'en';
        }else{
            this.currentLocale = this.store.get('Default-Language')
        }
        return this.currentLocale
    }

    /**
     * A Helper method to get language binding of current locale stored in languages.
     */
    getCurrentLanguage(val){return this.language[this.currentLocale][val]}

    /**
     * Change the Locale & set new locale into local storage.
     */
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