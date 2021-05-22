class Locale {
    constructor(store) {
        this.store = store
        
        if(store.get('Default-Language')===undefined || store.get('Default-Language')===null){
            this.currentLocale = 'en'
        }else{
            this.currentLocale = store.get('Default-Language')
        }
        this.languages = ['en', 'sv']
        this.idsToLangKey = {
            'start':'start',
            'start_webcam':'start_webcam',
            'changeLanguage':'language'
        }
        this.language = {
            'en': {
                'start': 'Start Game',
                'start_webcam': 'Start Game & Use Webcam',
                'language': 'Byt språk till svenska',
                'rock': 'Rock',
                'paper': 'Paper',
                'scissors': 'Scissors',
                'predict':'Predict',
                'predict_again':'Predict Again',
                'stop_game':'Stop game',
                'continue_game':'Continue Game',
                'choice_footer_label':'Choose An Option To Play Against The Computer',
                'cam_footer_label':'Press Predict & Motion',
                'human':'Human',
                'computer':'Computer',
                'score_text':'Score',
                'predicted':'Predicted',
                'prediction_continue':'Continue with Prediction'

            },
            'sv': {
                'start': 'Starta spelet',
                'start_webcam': 'Starta spel och använd webbkamera',
                'language': 'Change Language to English',
                'rock': 'Sten',
                'paper': 'Papper',
                'scissors': 'Sax',
                'predict':'Förutse',
                'predict_again':'Förutse igen',
                'stop_game':'Stoppa spelet',
                'continue_game':'Fortsätt spelet',
                'choice_footer_label':'Välj ett alternativ att spela mot datorn',
                'cam_footer_label':'',
                'human':'Mänsklig',
                'computer':'Dator',
                'score_text':'Göra',
                'predicted':'Förutspådd',
                'prediction_continue':'Fortsätt med Prediction'

            }
        }
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
        store.put('Default-Language',this.currentLocale);
        this.changeTextOnDOM();
    }

    changeTextOnDOM(){
        var keys = Object.keys(this.idsToLangKey)
        keys.forEach((value)=>{
            document.getElementById(value).innerHTML = this.getCurrentLanguage(this.idsToLangKey[value])
        })
    }
}