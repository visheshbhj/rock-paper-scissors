class LocaleView {
    constructor(localeModel) {
        //TODO -> Locale Model getDefault Lang
        this.localeModel = localeModel
        this.idsToLangKey = {
            'start':'start',
            'start_webcam':'start_webcam',
            'changeLanguage':'language'
        }
    }

    changeTextOnDOM(){
        var keys = Object.keys(this.idsToLangKey)
        keys.forEach((value)=>{
            document.getElementById(value).innerHTML = this.localeModel.getCurrentLanguage(this.idsToLangKey[value])
        })
    }
}