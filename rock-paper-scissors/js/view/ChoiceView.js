class ChoiceView{
    constructor(dom,session){
        this.dom = dom;
        this.session = session
    }

    startGame(){
        this.session.put('game-event-type','normal')
        $('#window').empty();
        $('#window').append(dom.getChoiceWindow());
        $('#scoreboard').remove()
    }

}