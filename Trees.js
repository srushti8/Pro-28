class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.image=loadImage("tree.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

  Radha Krishna today's episode new promo 2 April 2021 || Radha Krishna New Episode Today
