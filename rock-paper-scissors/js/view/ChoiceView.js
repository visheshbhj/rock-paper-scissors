class ChoiceView{
    constructor(dom,session){
        this.dom = dom;
        this.session = session
    }
    /**
     * Start a normal game, put this into session storage as 'game-event-type'.To be used later after user clicks "Continue" in Result View.
     * Scoreboard removed since game has not started.
     */
    startGame(){
        this.session.put('game-event-type','normal')
        $('#window').empty();
        $('#window').append(dom.getChoiceWindow());
        $('#scoreboard').remove()
    }

}