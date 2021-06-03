class WebcamView{
    /**
     * WebcamView constructor
     * @param {*} labels maps model parameters to labels
     */
    constructor(dom,session,localeModel,tfModel,webcam,gameModel){
        this.dom = dom
        this.session = session
        this.localeModel = localeModel;
        this.tfModel = tfModel;
        this.webcam = webcam;
        this.gameModel = gameModel
        this.labels = {0:'rock',1:'paper',2:'scissors'};
    }
    /**
     * Start a game with webcam on, put 'webcam' into session storage as 'game-event-type'.To be used later after user clicks "Continue" in Result View.
     * Scoreboard removed since game has not started.
     */
    startWebcamGame(){
        this.session.put('game-event-type','webcam')
        $('#window').empty();
        $('#window').append(dom.getWebcamWindow());
        $('#scoreboard').remove()
        this.webcam.setupCAM();
    }

    /**
     * Start a game with webcam on, put 'webcam' into session storage as 'game-event-type'.To be used later after user clicks "Continue" in Result View.
     * Scoreboard not removed since game has started.
     */
     startWebcamGameWithScoreBoard(){
        this.session.put('game-event-type','webcam')
        $('#window').empty();
        $('#window').append(dom.getWebcamWindow());
        $('#human_score').append(`<label>`+this.localeModel.getCurrentLanguage('human')+`</label><label>`+this.gameModel.getHumanScore()+`</label>`);
        $('#computer_score').append(`<label>`+this.localeModel.getCurrentLanguage('computer')+`</label><label>`+this.gameModel.getComputerScore()+`</label>`);
        this.webcam.setupCAM();
    }

    /**
     * Called when user Presses Predict or Predict again.
     * Starts the HTML loader, then captures image from Camera & passes it into Predict function.
     */
    startPrediction(){
        $('#prediction').empty();
        $('#prediction').append(dom.getLoader())
        this.camID = setInterval(() => this.webcam.getCamera().capture().then((img)=>this.predict(img)),1000);
    }

    /**
     * Predicts Users Gesture.  
     * Image taken is Normalized, then reshaped to 150,150 px.  
     * Next it is passed into the model which generates what the gesture was.  
     * clearInterval is used to stop more images being loaded to the model.  
     * The Result is parsed & then drawn on the HTML.  
     * @param {*} img retrived from webcam.
     */
    predict(img){
        this.tfModel.getModel()
            .predict(img.div(tf.scalar(255)).reshape([1,150,150,3]))
            .argMax(1).data().then((predicted) => {

                clearInterval(this.camID);
                this.result = this.labels[predicted];
                $('#prediction').empty();
                $('#prediction')
                    .append(`
                        <div class='avatar'>
                        <label>`+this.localeModel.getCurrentLanguage('predicted')+`</label>
                        <div class='choice_card'>
                            <img src='img/`+this.labels[predicted]+ `.svg'>
                            <label>`+ this.localeModel.getCurrentLanguage(this.labels[predicted]) + `</label>
                        </div>
                        </div>
                        <button id='predict'>`+ this.localeModel.getCurrentLanguage('predict_again') + `</button>
                    <button id='continue_with_prediction'>`+this.localeModel.getCurrentLanguage('prediction_continue')+`</button>
                    `);

            });
    }

    /**
     * Display the help window
     */
    webcamHelpWindow(){
        $('#window').empty()
        $('#window').append(dom.getWebcamHelpWindow())
    }
}