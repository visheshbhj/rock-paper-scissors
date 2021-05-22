class Confetti{
    constructor(){
        this.points = []
        this.numpoints = 100
        this.gravity = 0.1;
    }

    setBoard(canvas){
        this.canvas = canvas
        this.context = canvas.getContext('2d');
        this.height = canvas.height-5
        this.width = canvas.width-5
        return this;
    }
    
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    initPoint(p) {
        p.x = this.getRandom(0,this.canvas.width);
        p.y = 0;
        p.vx = Math.random() * 5 - 2;
        p.vy = Math.random() * -6 - 3;
        p.radius = 2.4;//Device width issue here
    }
    
    update() {
        var i, point, len = this.points.length;
        for(i = 0; i < len; i += 1) {
            point = this.points[i];
            point.vy -= this.gravity;
            point.x -= point.vx;
            point.y -= point.vy;
            if(point.x > this.width ||
               point.x < 0 ||
               point.y > this.height ||
               point.y < 0) {
                this.initPoint(point);
            }
        }
    }
    
    draw() {
        var i, point, len = this.points.length;
        this.context.clearRect(0, 0, this.width, this.height);
        for(i = 0; i < len; i += 1) {
            point = this.points[i];
            this.context.beginPath();
            this.context.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
            this.context.fillStyle = "#49463d";
            this.context.fill();
            
        }
    }
    
    addPoint() {
        var point;
        if(this.points.length < this.numpoints) {
            point = {};
            this.initPoint(point);
            this.points.push(point);
        }
    }
    
    startConfetti(){
        this.confettiProcess = setInterval(() => {
            this.addPoint();
            this.update();
            this.draw();
        }, 1000/24);
    }

    stopConfetti(){
        try {
            clearInterval(this.confettiProcess)    
        } catch (error) {
            
        }
    }
}