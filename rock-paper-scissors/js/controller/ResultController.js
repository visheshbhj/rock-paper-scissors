class ResultController{
    constructor(resultView){
        this.resultView = resultView;
        this.getClickEvents()
    }

    getClickEvents(){
        document.body.addEventListener('click',(event) =>{
            if(event.target.id === 'continue_game'){
                this.resultView.continueGame();
            }
        });
    }
}