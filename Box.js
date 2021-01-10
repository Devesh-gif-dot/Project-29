class Box  {
  constructor(x,y){
        this.x = x;
        this.y = y;
        
        this.body = Bodies.rectangle(this.x,this.y,50,50);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
       // console.log(pos.x);
        rectMode(CENTER);
        rect(pos.x,pos.y,50,50);
       
    }
};
