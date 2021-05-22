class DOM {

    constructor(locale){
        this.locale = locale;
    }

    getWelcomeWindow(){
        return `
        <article id='menu_window'>
            <header><img src='img/logo.svg'></header>
            <footer>
                <button id='start'>`+this.locale.getCurrentLanguage('start')+`</button>
                <button id='start_webcam'>`+this.locale.getCurrentLanguage('start_webcam')+`</button>
                <button id='changeLanguage'>`+this.locale.getCurrentLanguage('language')+`</button>
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
                    <div id='prediction'><button id='predict'>`+this.locale.getCurrentLanguage('predict')+`</button></div>
                </section>
            </header>
            <footer>
                <section id='choice_footer'>
                    <label> `+this.locale.getCurrentLanguage('cam_footer_label')+`</label>
                    <section id='scoreboard'>
                        <div class='scores' id='human_score'></div>
                        <div id='score_text'>`+this.locale.getCurrentLanguage('score_text')+`</div>
                        <div class='scores' id='computer_score'></div>
                    </section>
                    <button id='stop_game'>`+this.locale.getCurrentLanguage('stop_game')+`</button>
                </section>
            </footer>
        </article>
        `;
    }

    getChoiceWindow(){
        return `
        <article id='start_window'>
            <header>
                <div class='choice_card' id='choice_rock'><img src='img/rock.svg'><label id='label_rock'>`+this.locale.getCurrentLanguage('rock')+`</label></div>
                <div class='choice_card' id='choice_paper'><img src='img/paper.svg'><label id='label_rock'>`+this.locale.getCurrentLanguage('paper')+`</label></div>
                <div class='choice_card' id='choice_scissors'><img src='img/scissors.svg'><label id='label_rock'>`+this.locale.getCurrentLanguage('scissors')+`</label></div>
            </header>
            <footer>
                <section id='choice_footer'>
                    <label> `+this.locale.getCurrentLanguage('choice_footer_label')+`</label>
                    <section id='scoreboard'>
                        <div class='scores' id='human_score'></div>
                        <div id='score_text'>`+this.locale.getCurrentLanguage('score_text')+`</div>
                        <div class='scores' id='computer_score'></div>
                    </section>
                    <button id='stop_game'>`+this.locale.getCurrentLanguage('stop_game')+`</button>
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
                <button id='continue_game'>`+this.locale.getCurrentLanguage('continue_game')+`</button>
                <button id='stop_game'>`+this.locale.getCurrentLanguage('stop_game')+`</button>
            </footer>
        </article>
        `;
    }

    getLoader(){
        return `<div id='loader'></div>`;
    }

}