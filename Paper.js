class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':0.5,
      }
      this.x= x; this.y=y;this.r=r;
      this.body = Bodies.circle(x, y,(r-20)/2, options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };