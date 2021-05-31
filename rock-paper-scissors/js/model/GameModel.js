class GameModel{
    
    constructor(){
        this.human_score = 0;
        this.computer_score = 0;
    }

    getWinner(human_choice){
        this.computer_choice = this.choice_criteria(Math.random());

        if(human_choice === this.computer_choice){// Computer & Human played same choice -> Draw
            return {'result':'draw','computer_choice':this.computer_choice}
        }else{
            if( (human_choice==='rock') && (this.computer_choice==='paper')){
                this.computer_score++;
                return {'result':'computer','computer_choice':this.computer_choice}
            }
            if( (human_choice==='rock') && (this.computer_choice==='scissors')){
                this.human_score++
                return {'result':'human','computer_choice':this.computer_choice}
            }
            if( (human_choice==='paper') && (this.computer_choice==='rock')){
                this.human_score++
                return {'result':'human','computer_choice':this.computer_choice}
            }
            if( (human_choice==='paper') && (this.computer_choice==='scissors')){
                this.computer_score++
                return {'result':'computer','computer_choice':this.computer_choice}
            }
            if( (human_choice==='scissors') && (this.computer_choice==='rock')){
                this.computer_score++
                return {'result':'computer','computer_choice':this.computer_choice}
            }
            if( (human_choice==='scissors') && (this.computer_choice==='paper')){
                this.human_score++
                return {'result':'human','computer_choice':this.computer_choice}
            }
        }
    }

    /**
     * Helps make computer choice of rock, paper, scissors
     * @param {*} value 
     * @returns Rock, Paper, Scissors 
     */
    choice_criteria(value){
        if(value >= 0 && value < .33){
            return 'rock';
        }
        if(value >= .33 && value < .66){
            return 'paper';
        }
        if(value >= .66 && value < 1){
            return 'scissors';
        }
    }

    getHumanScore(){return this.human_score;} 
    getComputerScore(){return this.computer_score;} 

    resetScores(){
        this.human_score = 0
        this.computer_score = 0
    }
}