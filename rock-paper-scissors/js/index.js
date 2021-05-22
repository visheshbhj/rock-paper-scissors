var confetti = new Confetti()
var store = new LocalStorage();
var session = new SessionStorage();
var gamelogic = new GameLogic();

var locale = new Locale(store);
var dom = new DOM(locale);
var choice = new ChoiceHandler(dom,gamelogic,store,confetti,locale);
var webcam = new WebcamHandler(gamelogic,locale,dom,choice);
var welcome = new WelcomeHandler(dom,store,session,webcam,locale);
var result = new ResultHandler(dom,gamelogic,store,confetti,locale,webcam);

$(document).ready(()=>{
    webcam.init().then(()=>{
        $('#window').append(dom.getWelcomeWindow())
        canvas = document.getElementById("background");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }) 
});

document.body.addEventListener('click',(event)=> console.log('Target -> '+event.target.id+', event -> '+event.target.src+', txt -> '+event.target.innerText));