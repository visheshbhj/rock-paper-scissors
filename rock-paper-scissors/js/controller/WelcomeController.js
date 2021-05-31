class WelcomeController{

    constructor(localeView,localeModel,choiceView,webcamView){
        this.localeView = localeView
        this.localeModel = localeModel
        this.choiceView = choiceView
        this.webcamView = webcamView
        this.getClickEvents();
    }

    getClickEvents(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.id === 'start'){
                this.choiceView.startGame()
            }
            if(event.target.id === 'start_webcam'){
                this.webcamView.startWebcamGame()
            }
            if(event.target.id === 'changeLanguage'){
                this.localeModel.changeLocale()
                this.localeView.changeTextOnDOM()
            }
        });
    }

}