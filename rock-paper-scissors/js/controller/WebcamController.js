class WebcamController{
    constructor(gameModel,webcamView,resultView){
        this.gameModel = gameModel;
        this.webcamView = webcamView;
        this.resultView = resultView;
        this.clickEvents();
    }

    clickEvents(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.id==='predict'){
                this.webcamView.startPrediction()
            }
            if(event.target.id === 'continue_with_prediction'){
                var winner = this.gameModel.getWinner(this.webcamView.result)
                this.resultView.setupPlayerChoicesAndScore(this.webcamView.result,winner.computer_choice)
                this.resultView.winnerConfetti(winner.result)
            }
        });
    }
}