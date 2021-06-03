/**
 * Confetti Animation
 */
class Confetti{
    /**
     * points -> points array
     * numpoints -> number of points
     * gravity -> rate at which confetti falls
     */
    constructor(){
        this.points = []
        this.numpoints = 100
        this.gravity = 0.1;
    }
    /**
     * Setup the canvas
     */
    setBoard(canvas){
        this.canvas = canvas
        this.context = canvas.getContext('2d');
        this.height = canvas.height-5
        this.width = canvas.width-5
        return this;
    }
    
    /**
     * Get random number in range
     */
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Setup a single point.
     * x & y specifies position
     * vx, vy specify velocity.
     */
    initPoint(p) {
        p.x = this.getRandom(0,this.canvas.width);
        p.y = 0;
        p.vx = Math.random() * 5 - 2;
        p.vy = Math.random() * -6 - 3;
        p.radius = 2.4;//Device width issue here
    }
    
    /**
     * Gives the Point velocity, but the point is not painted.
     * If number of points exceds 100 or the board, then reset the point.
     */
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
    
    /**
     * Draw the confetti fall.
     * Clear the canvas & then plot the points.
     */
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
    
    /**
     * if points array is not full initialize point object & add it to points array.
     */
    addPoint() {
        var point;
        if(this.points.length < this.numpoints) {
            point = {};
            this.initPoint(point);
            this.points.push(point);
        }
    }
    
    /**
     * Start The confetti fall.
     * Every point is drawn at 24th of a second.
     */
    startConfetti(){
        this.confettiProcess = setInterval(() => {
            this.addPoint();
            this.update();
            this.draw();
        }, 1000/24);
    }

    /**
     * Stop the confetti.
     */
    stopConfetti(){
        try {
            clearInterval(this.confettiProcess)    
        } catch (error) {
            
        }
    }
}