class Polygon {
    constructor(x,y,r){
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,r/2)
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
        
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50)
    }
}