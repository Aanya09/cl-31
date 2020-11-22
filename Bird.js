class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.trjectory=[]
  }
  

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y];
    this.trjectory.push(position);}
    for(var i=0;i<this.trjectory.length;i++){
    image(this.smokeImage,this.trjectory[i][0],this.trjectory[i][1]);
    }
  }
}
