/**
 * Accepts events from Welcome window.
 */
class WelcomeController{

    constructor(localeView,localeModel,choiceView,webcamView,gameModel){
        this.localeView = localeView
        this.localeModel = localeModel
        this.choiceView = choiceView
        this.webcamView = webcamView
        this.gameModel = gameModel
        this.getClickEvents();
    }

    /**
     * Accepts Click Events of welcomw window.
     * 
     * start -> starts normal game  
     * start_webcam -> start game with webcam  
     * changeLanguage -> change the language & then change the DOM.
     * modal -> if modal pop up window is open close it
     * modal_close -> to close modal pop up window
     */
    getClickEvents(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.id === 'start'){
                this.choiceView.startGame()
            }
            if(event.target.id === 'start_webcam'){
                if(this.gameModel.getHumanScore() == 0 && this.gameModel.getComputerScore() == 0){
                    this.webcamView.startWebcamGame()
                }else{
                    this.webcamView.startWebcamGameWithScoreBoard()
                }
            }
            if(event.target.id === 'changeLanguage'){
                this.localeModel.changeLocale()
                this.localeView.changeTextOnDOM()
            }
            if(event.target.id === 'modal'){
                document.getElementById('modal').style.display = "none";
            }
            if(event.target.id === 'modal_close'){
                document.getElementById('modal').style.display = "none";
            }
        });
    }

}