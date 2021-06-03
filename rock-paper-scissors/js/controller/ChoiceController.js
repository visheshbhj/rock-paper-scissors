/**
 * Accepts events from Choice window. (Window where user chooses rock,paper or scissors)
 */
class ChoiceController{
    constructor(resultView,gameModel){
        this.resultView = resultView;
        this.gameModel = gameModel;
        this.getClickEvents();
    }
    /**
     * Accepts User's choice (rock, paper or scissors) from Choice window  
     * First check if User is actually in Choice window as the options is a reusuable component.  
     * Check what was Human's Choice
     */
    getClickEvents(){
        document.getElementById('window').addEventListener('click',(event)=>{
            if($('#start_window').length){// Check if its the choice window only
                this.getUserChoice(event,'rock');
                this.getUserChoice(event,'paper');
                this.getUserChoice(event,'scissors');
            }
        });
    }

    /**
     * Check what was human's choice.  
     * First check where did user click.  
     * if click is valid get the winner & draw the players choice's.  
     * Lastly Draw confetti on winner.
     */
    getUserChoice(event,human_choice){
        try {
            if(event.target.id === 'choice_'+human_choice || event.target.id === 'label_'+human_choice || event.target.src.includes('img/'+human_choice)){
                var winner = this.gameModel.getWinner(human_choice)
                this.resultView.setupPlayerChoicesAndScore(human_choice,winner.computer_choice)
                this.resultView.winnerConfetti(winner.result)
                this.resultView.writeRoundResult(winner.result)
            }
        } catch (error) {
            
        }
    }
}