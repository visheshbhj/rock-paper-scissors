class TensorflowModel{

    async init(){
        //this.pretrained = await tf.loadLayersModel('./js/tensorflow_model/model.json')
        this.pretrained = await tf.loadLayersModel('https://raw.githubusercontent.com/visheshbhj/rock-paper-scissors/main/rock-paper-scissors/js/tensorflow/model.json')
        return this.pretrained;
    }

    getModel(){
        return this.pretrained;
    }
}