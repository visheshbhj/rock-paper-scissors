var session = new SessionStorage()
var store = new LocalStorage()

var localeModel = new LocaleModel(store,language);
var gameModel = new GameModel();
var dom = new DOM(localeModel);
var confetti = new Confetti();
var webcam = new Webcam()
var tfModel = new TensorflowModel()

var localeView = new LocaleView(localeModel);
var choiceView = new ChoiceView(dom,session)
var webcamView = new WebcamView(dom,session,localeModel,tfModel,webcam)
var resultView = new ResultView(dom,session,gameModel,localeModel,confetti,webcam);

var welcomeController = new WelcomeController(localeView,localeModel,choiceView,webcamView);
var choiceController = new ChoiceController(resultView,gameModel);
var resultController = new ResultController(resultView);
var webcamController = new WebcamController(gameModel,webcamView,resultView);

$(document).ready(()=>{
    tfModel.init().then(()=>{
        $('#window').append(dom.getWelcomeWindow())
        canvas = document.getElementById("background");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }) 
});

document.body.addEventListener('click',(event)=> console.log('Target -> '+event.target.id+', event -> '+event.target.src+', txt -> '+event.target.innerText));