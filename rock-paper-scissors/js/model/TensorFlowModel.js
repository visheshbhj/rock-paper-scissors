class TensorflowModel{
    /**
     * Called asyncronously to load the model, as model is of large size.  
     * Both commented & the uncommented line (this.pretrained) look different, but both call the same model.  
     * tf.loadLayersModel unfortunately needs an https prefix or else it won't load the model.  
     * Error is cors.  
     * @returns the model
     */
    async init(){
        //this.pretrained = await tf.loadLayersModel('./js/tensorflow_model/model.json')
        this.pretrained = await tf.loadLayersModel('https://raw.githubusercontent.com/visheshbhj/rock-paper-scissors/main/rock-paper-scissors/js/tensorflow/model.json')
        return this.pretrained;
    }
    /**
     * Get the model
     */
    getModel(){
        return this.pretrained;
    }
}