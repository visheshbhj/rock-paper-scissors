class ResultView{
    constructor(dom,session,gameModel,localeModel,confetti,webcam){
        this.dom = dom
        this.session = session
        this.gameModel = gameModel
        this.localeModel = localeModel
        this.confetti = confetti
        this.webcam = webcam
    }

    stopGame(){
        $('#window').empty();
        this.confetti.stopConfetti()
        this.gameModel.resetScores();
        $('#window').append(this.dom.getWelcomeWindow());
    }

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

    winnerConfetti(winner){
        if(winner === 'draw'){
            //TODO
        }else{
            var canvas = document.getElementById(winner+'_result_canvas')
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