class ChoiceHandler{
    constructor(dom,gamelogic,store,confetti){
        this.dom = dom;
        this.gamelogic = gamelogic;
        this.store = store
        this.confetti = confetti
        this.locale = locale
        this.getClickEvents();
    }

    getClickEvents(){
        document.getElementById('window').addEventListener('click',(event)=>{
            if(event.target.id === 'stop_game'){
                $('#window').empty();
                this.confetti.stopConfetti()
                this.gamelogic.resetScores();
                $('#window').append(dom.getWelcomeWindow());
            }
            if($('#start_window').length){// Check if its the choice window only
                try {
                    if(event.target.id === 'choice_rock' || event.target.id === 'label_rock' || event.target.src.includes('img/rock')){
                        this.winner = gamelogic.getWinner('rock')
                        this.displayResultDOM('rock',this.winner.computer_choice)
                        this.winnerConfetti(this.winner.result)
                    }
                } catch (error) {
                    
                }

                try {
                    if(event.target.id === 'choice_paper' || event.target.id === 'label_paper' || event.target.src.includes('img/paper')){
                        this.winner = gamelogic.getWinner('paper')
                        this.displayResultDOM('paper',this.winner.computer_choice)
                        this.winnerConfetti(this.winner.result)
                    }
                } catch (error) {
                    
                }

                try {
                    if(event.target.id === 'choice_scissors' || event.target.id === 'label_scissors' || event.target.src.includes('img/scissors')){
                        this.winner = gamelogic.getWinner('scissors')
                        this.displayResultDOM('scissors',this.winner.computer_choice)
                        this.winnerConfetti(this.winner.result)
                    }
                } catch (error) {
                    
                }
            }
            
        });
    }

    toCamelCase(word) {
        return word.charAt(0).toUpperCase()+word.substring(1);
    }

    displayResultDOM(human_choice,computer_choice) {
        $('#window').empty();
        $('#window').append(dom.getResultWindow());
        $('header').append(`
                            <div class='avatar'>
                                <label>`+this.locale.getCurrentLanguage('human')+`</label>
                                <div class='choice_card'>
                                    <img src='img/`+human_choice+`.svg'>
                                    <label>`+this.locale.getCurrentLanguage(human_choice)+`</label>
                                </div>
                                <label>`+this.locale.getCurrentLanguage('score_text')+` : `+ this.gamelogic.getHumanScore() + `</label>
                                <canvas class='result_canvas' id='human_result_canvas'></canvas>
                            </div>
                            `);

        $('header').append(`
                            <div class='avatar'>
                            <label>`+this.locale.getCurrentLanguage('computer')+`</label>
                            <div class='choice_card'>
                                <img src='img/`+computer_choice + `.svg'>
                                <label>`+ this.locale.getCurrentLanguage(computer_choice) + `</label>
                            </div>
                            <label>`+this.locale.getCurrentLanguage('score_text')+` : `+ this.gamelogic.getComputerScore() + `</label>
                            <canvas class='result_canvas' id='computer_result_canvas'></canvas>
                            </div>
                            `);
    }

    winnerConfetti(winner){
        if(winner === 'draw'){
            //TODO
        }else{
            canvas = document.getElementById(winner+'_result_canvas')
            canvas.width = document.getElementsByClassName('avatar')[0].offsetWidth
            canvas.height = document.getElementsByClassName('avatar')[0].offsetHeight
            this.confetti.setBoard(canvas).startConfetti();
            this.setAvatarBorder(winner);
        }
    }

    setAvatarBorder(winner){
        if(winner==='draw'){

        }else{
            if(winner==='human'){
                document.getElementsByClassName('avatar')[0].style.border = '3px solid green'
                document.getElementsByClassName('avatar')[1].style.border = '3px solid red'
            }else{
                document.getElementsByClassName('avatar')[1].style.border = '3px solid green'
                document.getElementsByClassName('avatar')[0].style.border = '3px solid red'
            }
        }
    }
}