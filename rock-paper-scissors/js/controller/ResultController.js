/**
 * Accepts events from Results window.
 */
class ResultController{

    constructor(resultView){
        this.resultView = resultView;
        this.getClickEvents()
    }
    /**
     * stop_game -> stop the game 
     * continue_game -> continue the game 
     */
    getClickEvents(){
        document.body.addEventListener('click',(event) =>{
            if(event.target.id === 'stop_game'){
                this.resultView.stopGame();
            }
            if(event.target.id === 'continue_game'){
                this.resultView.continueGame();
            }
        });
    }
}