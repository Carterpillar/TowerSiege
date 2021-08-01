class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,735,2500,50,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("#645050");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,2500,50);
    }
}