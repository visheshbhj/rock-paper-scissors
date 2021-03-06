/**
 * Setup & gets the webcam
 */
class Webcam {
    /**
     * Setup webcam & play it
     */
    setupCAM(){
        if (navigator.mediaDevices.getUserMedia) {
            /* navigator.mediaDevices.getUserMedia({video: true}).then((stream) =>{
                this.video = document.getElementById('cam');
                this.video.srcObject = stream;
                this.video.play();
            }); */
            tf.data.webcam(document.getElementById('cam'),{facingMode:'user',resizeWidth:150,resizeHeight:150}).then((cam) =>{this.cam = cam})
        }
    }
    /**
     * Get The Webcam.
     */
    getCamera(){
        return this.cam;
    }
}