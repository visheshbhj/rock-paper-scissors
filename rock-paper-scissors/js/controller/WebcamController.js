/**
 * Accepts Events from Webcam controller.
 */
class WebcamController{
    constructor(gameModel,webcamView,resultView){
        this.gameModel = gameModel;
        this.webcamView = webcamView;
        this.resultView = resultView;
        this.getClickEvents();
    }

    /**
     * predict -> start the prediction.  
     * continue_with_prediction -> get the result of prediction from the view, then generate the winner & lastly draw the results.
     */
    getClickEvents(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.id==='predict'){
                this.webcamView.startPrediction()
            }
            if(event.target.id === 'continue_with_prediction'){
                var winner = this.gameModel.getWinner(this.webcamView.result)
                this.resultView.setupPlayerChoicesAndScore(this.webcamView.result,winner.computer_choice)
                this.resultView.winnerConfetti(winner.result)
                this.resultView.writeRoundResult(winner.result)
            }
            if(event.target.id === 'webcam_help'){
                this.webcamView.webcamHelpWindow();
            }
        });
    }
}