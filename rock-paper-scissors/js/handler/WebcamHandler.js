class WebcamHandler{
    constructor(gamelogic,locale,dom,choiceHandler){
        this.gamelogic = gamelogic;
        this.locale = locale;
        this.dom = dom
        this.choiceHandler = choiceHandler
        this.labels = {0:'rock',1:'paper',2:'scissors'};
        this.clickEvents();
    }

    clickEvents(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.id==='predict'){
                $('#prediction').empty();
                $('#prediction').append(dom.getLoader())
                this.getCam()
            }
            if(event.target.id === 'continue_with_prediction'){
                this.winner = gamelogic.getWinner(this.result)
                this.choiceHandler.displayResultDOM(this.result,this.winner.computer_choice)
                this.choiceHandler.winnerConfetti(this.winner.result)
            }
        });
    }

    async init(){
        this.pretrained = await tf.loadLayersModel('http://localhost:3000/js/tensorflow_model/model.json')
        return this.pretrained;
    }

    setupCAM(){
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({video: true}).then((stream) =>{
                this.video = document.getElementById('cam');
                this.video.srcObject = stream;
                this.video.play();
            });
        }
    }

    getCam(){
        tf.data.webcam(this.video,{facingMode:'user',resizeWidth:150,resizeHeight:150}).then((cam) => {
            this.cam = cam;
            this.camID = setInterval(() => this.capture(),1000);
        })
    }

    capture(){
        this.cam.capture().then((img)=>this.predict(img));
    }

    predict(img){
        var res = this.pretrained.predict(img.div(tf.scalar(255)).reshape([1,150,150,3]));
        /* DO NOT TOUCH THIS 
        console.log('=============================================================')
        console.log(res.print())
        console.log('=============================================================')
        */
        res.argMax(1).data().then((result) =>{
            clearInterval(this.camID);
            //console.log('Result -> '+result)
            this.result = this.labels[result];
            $('#prediction').empty();
            $('#prediction')
                .append(`
                    <div class='avatar'>
                        <label>`+this.locale.getCurrentLanguage('predicted')+`</label>
                        <div class='choice_card'>
                            <img src='img/`+this.labels[result]+ `.svg'>
                            <label>`+ this.locale.getCurrentLanguage(this.labels[result]) + `</label>
                        </div>
                    </div>
                    <button id='predict'>`+ this.locale.getCurrentLanguage('predict_again') + `</button>
                    <button id='continue_with_prediction'>`+this.locale.getCurrentLanguage('prediction_continue')+`</button>
            `);
        });
    }

}