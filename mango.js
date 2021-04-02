class Mango {
  constructor(x,y,r) {
  var options={ 
  isStatic:true 
  } 
  this.x=x; 
  this.y=y; 
  this.r=r 
  this.image=loadImage("mango.png");
  this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options) 
  World.add(world, this.body); 
  } 
  display() {
  var mangopos=this.body.position; 
  push(); 
  translate(mangopos.x, mangopos.y); 
  fill(255,0,255); 
  imageMode(CENTER); 
  image(this.image, 0,0,this.r, this.r)
  pop(); 
  } 
}