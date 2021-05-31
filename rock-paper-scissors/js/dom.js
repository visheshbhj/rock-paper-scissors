class DOM {

    constructor(localeModel){
        this.localeModel = localeModel;
    }

    getWelcomeWindow(){
        return `
        <article id='menu_window'>
            <header><img src='img/logo.svg'></header>
            <footer>
                <button id='start'>`+this.localeModel.getCurrentLanguage('start')+`</button>
                <button id='start_webcam'>`+this.localeModel.getCurrentLanguage('start_webcam')+`</button>
                <button id='changeLanguage'>`+this.localeModel.getCurrentLanguage('language')+`</button>
            </footer>
        </article>
        `;
    }

    getWebcamWindow(){
        return `
        <article id='webcam_window'>
            <header>
                <section id='cam_frame'>
                    <video id='cam'></video>
                    <div id='prediction'><button id='predict'>`+this.localeModel.getCurrentLanguage('predict')+`</button></div>
                </section>
            </header>
            <footer>
                <section id='choice_footer'>
                    <label> `+this.localeModel.getCurrentLanguage('cam_footer_label')+`</label>
                    <section id='scoreboard'>
                        <div class='scores' id='human_score'></div>
                        <div id='score_text'>`+this.localeModel.getCurrentLanguage('score_text')+`</div>
                        <div class='scores' id='computer_score'></div>
                    </section>
                    <button id='stop_game'>`+this.localeModel.getCurrentLanguage('stop_game')+`</button>
                </section>
            </footer>
        </article>
        `;
    }

    getChoiceWindow(){
        return `
        <article id='start_window'>
            <header>
                <div class='choice_card' id='choice_rock'><img src='img/rock.svg'><label id='label_rock'>`+this.localeModel.getCurrentLanguage('rock')+`</label></div>
                <div class='choice_card' id='choice_paper'><img src='img/paper.svg'><label id='label_rock'>`+this.localeModel.getCurrentLanguage('paper')+`</label></div>
                <div class='choice_card' id='choice_scissors'><img src='img/scissors.svg'><label id='label_rock'>`+this.localeModel.getCurrentLanguage('scissors')+`</label></div>
            </header>
            <footer>
                <section id='choice_footer'>
                    <label> `+this.localeModel.getCurrentLanguage('choice_footer_label')+`</label>
                    <section id='scoreboard'>
                        <div class='scores' id='human_score'></div>
                        <div id='score_text'>`+this.localeModel.getCurrentLanguage('score_text')+`</div>
                        <div class='scores' id='computer_score'></div>
                    </section>
                    <button id='stop_game'>`+this.localeModel.getCurrentLanguage('stop_game')+`</button>
                </section>
            </footer>
        </article>
        `;
    }

    getResultWindow(){
        return `
        <article id='result_window'>
            <header>
            </header>
            <footer>
                <button id='continue_game'>`+this.localeModel.getCurrentLanguage('continue_game')+`</button>
                <button id='stop_game'>`+this.localeModel.getCurrentLanguage('stop_game')+`</button>
            </footer>
        </article>
        `;
    }

    getLoader(){
        return `<div id='loader'></div>`;
    }

}