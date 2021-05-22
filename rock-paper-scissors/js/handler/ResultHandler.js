class ResultHandler{
    constructor(dom,gamelogic,store,confetti,locale,webcamHandler){
        this.dom = dom
        this.gamelogic = gamelogic
        this.store = store
        this.confetti = confetti
        this.locale = locale
        this.webcamHandler = webcamHandler
        this.getClickEvents()
    }

    getClickEvents(){
        document.body.addEventListener('click',(event) =>{
            if(event.target.id === 'continue_game'){
                $('#window').empty();
                if(this.store.get('game-event-type') === 'normal'){
                    this.confetti.stopConfetti()
                    $('#window').append(dom.getChoiceWindow());
                    
                }
                if(this.store.get('game-event-type') === 'webcam'){
                    this.confetti.stopConfetti()
                    $('#window').append(dom.getWebcamWindow());
                    this.webcamHandler.setupCAM();
                }
                $('#human_score').append(`<label>`+this.locale.getCurrentLanguage('human')+`</label><label>`+this.gamelogic.getHumanScore()+`</label>`);
                $('#computer_score').append(`<label>`+this.locale.getCurrentLanguage('computer')+`</label><label>`+this.gamelogic.getComputerScore()+`</label>`);
            }
        });
    }
}