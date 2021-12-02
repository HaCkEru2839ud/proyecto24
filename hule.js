class hule {
    constructor(x, y, radio) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.x = x;
      this.y = y;
      this.radio = radio;
      this.body = Bodies.circle(this.x, this.y, (this.radio-20)/2, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('black')
      rectMode(CENTER)
      ellipse(0, 0, this.radio, this.radio);
      pop();
    };
  };