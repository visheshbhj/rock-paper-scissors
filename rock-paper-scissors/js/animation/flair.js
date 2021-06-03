/**
 * Flair is displayed when we have an overall winner.
 */
class Flair{
  constructor(){
    this.confetti = [];
    this.confettiCount = 300;
    this.gravity = 0.5;
    this.terminalVelocity = 2;
    this.drag = 0.075;
    this.colors = [
      { front : 'red', back: 'darkred'},
      { front : 'green', back: 'darkgreen'},
      { front : 'blue', back: 'darkblue'},
      { front : 'yellow', back: 'darkyellow'},
      { front : 'orange', back: 'darkorange'},
      { front : 'pink', back: 'darkpink'},
      { front : 'purple', back: 'darkpurple'},
      { front : 'turquoise', back: 'darkturquoise'},
    ];
  }

  /**
   * Set the canvas board.
   */
  setBoard = () => {
    this.canvas = document.getElementById('background');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    return this;
  }
  
  randomRange = (min, max) => Math.random() * (max - min) + min
  
  /**
   * Initialize flairs
   */
  initFlair = () => {
    for (let i = 0; i < this.confettiCount; i++) {
      this.confetti.push({
        color      : this.colors[Math.floor(this.randomRange(0, this.colors.length))],
        dimensions : {
          x: this.randomRange(10, 20),
          y: this.randomRange(10, 30),
        },
        position   : {
          x: this.randomRange(0, this.canvas.width),
          y: this.canvas.height - 1,
        },
        rotation   : this.randomRange(0, 2 * Math.PI),
        scale      : {
          x: 1,
          y: 1,
        },
        velocity   : {
          x: this.randomRange(-50, 50),
          y: this.randomRange(-50, -10),
        },
      });
    }
    return this;
  }
  
  //---------Render Flair-----------
  render = () => {  
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.confetti.forEach((confetto, index) => {
      let width = (confetto.dimensions.x * confetto.scale.x);
      let height = (confetto.dimensions.y * confetto.scale.y);
      
      // Move canvas to position and rotate
      this.ctx.translate(confetto.position.x, confetto.position.y);
      this.ctx.rotate(confetto.rotation);
      
      // Apply forces to velocity
      confetto.velocity.x -= confetto.velocity.x * this.drag;
      
      confetto.velocity.y =Math.min(confetto.velocity.y + this.gravity, this.terminalVelocity);
      confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
  
      // Set position
      confetto.position.x += confetto.velocity.x;
      confetto.position.y += confetto.velocity.y;
      
      // Delete confetti when out of frame
      if (confetto.position.y >= this.canvas.height) this.confetti.splice(index, 1);
  
      // Loop confetto x position
      if (confetto.position.x > this.canvas.width) confetto.position.x = 0;
      if (confetto.position.x < 0) confetto.position.x = this.canvas.width;
  
      // Spin confetto by scaling y
      confetto.scale.y = Math.cos(confetto.position.y * 0.1);
      this.ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
       
      // Draw confetto
      this.ctx.fillRect(-width / 2, -height / 2, width, height);
      
      // Reset transform matrix
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    });
  
    window.requestAnimationFrame(this.render);
  }

}