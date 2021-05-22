class WelcomeHandler{

    constructor(dom,store,session,webcamHandler){
        this.dom = dom;
        this.store = store
        this.session = session
        this.webcamHandler = webcamHandler
        this.locale = locale
        this.getClickEvents();
    }

    getClickEvents(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.id === 'start'){
                this.store.put('game-event-type','normal')
                $('#window').empty();
                $('#window').append(dom.getChoiceWindow());
                $('#scoreboard').remove()
            }
            if(event.target.id === 'start_webcam'){
                this.store.put('game-event-type','webcam')
                $('#window').empty();
                $('#window').append(dom.getWebcamWindow());
                $('#scoreboard').remove()
                //$('#prediction').empty();
                //$('#prediction').append(dom.getLoader())
                this.webcamHandler.setupCAM();
            }
            if(event.target.id === 'changeLanguage'){
                this.locale.changeLocale()
            }
            if(event.target.id === 'theme'){
                $('#window').empty();
            }
        
        });
    }

}