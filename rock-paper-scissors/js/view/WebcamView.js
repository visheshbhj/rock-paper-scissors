class WebcamView{
    
    constructor(dom,session,localeModel,tfModel,webcam){
        this.dom = dom
        this.session = session
        this.localeModel = localeModel;
        this.tfModel = tfModel;
        this.webcam = webcam;
        this.labels = {0:'rock',1:'paper',2:'scissors'};
    }

    startWebcamGame(){
        this.session.put('game-event-type','webcam')
        $('#window').empty();
        $('#window').append(dom.getWebcamWindow());
        $('#scoreboard').remove()
        this.webcam.setupCAM();
    }

    startPrediction(){
        $('#prediction').empty();
        $('#prediction').append(dom.getLoader())
        this.camID = setInterval(() => this.webcam.getCamera().capture().then((img)=>this.predict(img)),1000);
    }

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

}