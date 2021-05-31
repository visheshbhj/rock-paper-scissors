class ChoiceController{
    constructor(resultView,gameModel){
        this.resultView = resultView;
        this.gameModel = gameModel;
        this.getClickEvents();
    }

    getClickEvents(){
        document.getElementById('window').addEventListener('click',(event)=>{
            if(event.target.id === 'stop_game'){
                this.resultView.stopGame();
            }
            if($('#start_window').length){// Check if its the choice window only
                this.getUserChoice(event,'rock');
                this.getUserChoice(event,'paper');
                this.getUserChoice(event,'scissors');
            }
            
        });
    }

    getUserChoice(event,human_choice){
        try {
            if(event.target.id === 'choice_'+human_choice || event.target.id === 'label_'+human_choice || event.target.src.includes('img/'+human_choice)){
                var winner = this.gameModel.getWinner(human_choice)
                this.resultView.setupPlayerChoicesAndScore(human_choice,winner.computer_choice)
                this.resultView.winnerConfetti(winner.result)
            }
        } catch (error) {
            
        }
    }
}