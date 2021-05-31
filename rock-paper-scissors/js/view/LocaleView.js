class LocaleView {
    constructor(localeModel) {
        this.localeModel = localeModel
        this.idsToLangKey = {
            'start':'start',
            'start_webcam':'start_webcam',
            'changeLanguage':'language'
        }
    }
    /**
     * Dynamically changes text of DOM. Called by WelcomeController on language change.
     */
    changeTextOnDOM(){
        var keys = Object.keys(this.idsToLangKey)
        keys.forEach((value)=>{
            document.getElementById(value).innerHTML = this.localeModel.getCurrentLanguage(this.idsToLangKey[value])
        })
    }
}