class ResultView{
    constructor(dom,session,gameModel,localeModel,confetti,webcam,flair){
        this.dom = dom
        this.session = session
        this.gameModel = gameModel
        this.localeModel = localeModel
        this.confetti = confetti
        this.webcam = webcam
        this.flair = flair
    }
    /**
     * Stops the Game & resets the Scores to 0, then takes back user to welcome screen.
     * If game is draw do nothing.
     * If game has an over all winner then display
     */
    stopGame(){
        $('#window').empty();
        this.confetti.stopConfetti()
        $('#window').append(this.dom.getWelcomeWindow());

        if(this.gameModel.getHumanScore() == 0 && this.gameModel.getComputerScore() == 0){
            // DO NOTHING Scores are zero
        }else{
            var finalWinner = this.gameModel.getOverAllWinner()
            $('#modal').empty()
            $('#modal').append(`
                <div id='modal_content'>
                <span id='modal_text'>`+this.localeModel.getCurrentLanguage('game_result_'+finalWinner)+`</span>
                <span id='modal_close'>&times;</span>
                </div>
            `)
            document.getElementById('modal').style.display = 'block';
            this.gameModel.resetScores();
            if(finalWinner === 'Draw'){
                // Do Nothing
            }else{
                this.flair.setBoard().initFlair().render();
            }
        }
    }
    /**
     * Continue game.
     * Check if game is normal or webcam based using 'game-event-type' key present in session & load corresponding Screen.
     * Finally display the scores.
     */
    continueGame(){
        $('#window').empty();
        if(this.session.get('game-event-type') === 'normal'){
            this.confetti.stopConfetti()
            $('#window').append(this.dom.getChoiceWindow());
        }
        if(this.session.get('game-event-type') === 'webcam'){
            this.confetti.stopConfetti()
            $('#window').append(this.dom.getWebcamWindow());
            this.webcam.setupCAM()
        }
        $('#human_score').append(`<label>`+this.localeModel.getCurrentLanguage('human')+`</label><label>`+this.gameModel.getHumanScore()+`</label>`);
        $('#computer_score').append(`<label>`+this.localeModel.getCurrentLanguage('computer')+`</label><label>`+this.gameModel.getComputerScore()+`</label>`);
    }

    /**
     * Display the choices of human & computer on result window. Also displays the scores of players.
     * @param {*} human_choice 
     * @param {*} computer_choice 
     */
    setupPlayerChoicesAndScore(human_choice,computer_choice) {
        $('#window').empty();
        $('#window').append(this.dom.getResultWindow());
        $('header').append(`
                            <div class='avatar'>
                                <label>`+this.localeModel.getCurrentLanguage('human')+`</label>
                                <div class='choice_card'>
                                    <img src='img/`+human_choice+`.svg'>
                                    <label>`+this.localeModel.getCurrentLanguage(human_choice)+`</label>
                                </div>
                                <label>`+this.localeModel.getCurrentLanguage('score_text')+` : `+ this.gameModel.getHumanScore() + `</label>
                                <canvas class='result_canvas' id='human_result_canvas'></canvas>
                            </div>
                            `);

        $('header').append(`
                            <div class='avatar'>
                            <label>`+this.localeModel.getCurrentLanguage('computer')+`</label>
                            <div class='choice_card'>
                                <img src='img/`+computer_choice + `.svg'>
                                <label>`+ this.localeModel.getCurrentLanguage(computer_choice) + `</label>
                            </div>
                            <label>`+this.localeModel.getCurrentLanguage('score_text')+` : `+ this.gameModel.getComputerScore() + `</label>
                            <canvas class='result_canvas' id='computer_result_canvas'></canvas>
                            </div>
                            `);
    }
    /**
     * Draw Confetti on Winner also sets winner's & looser's border color
     * @param {*} winner 
     */
    winnerConfetti(winner){
        if(winner === 'Draw'){
            //Nothing to do here
        }else{
            var canvas = document.getElementById(winner+'_result_canvas')
            canvas.width = document.getElementsByClassName('avatar')[0].offsetWidth
            canvas.height = document.getElementsByClassName('avatar')[0].offsetHeight
            this.confetti.setBoard(canvas).startConfetti();
            this.setAvatarBorder(winner);
        }
    }
    /**
     * Draw winner's & looser's border color as green & red.
     * @param {*} winner 
     */
    setAvatarBorder(winner){
        if(winner==='Draw'){
            //Nothing to do here
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

    writeRoundResult(result){
        document.getElementById('result_text').innerHTML = this.localeModel.getCurrentLanguage('round_result_'+result)
    }
}