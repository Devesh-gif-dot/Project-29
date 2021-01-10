class Chain{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 50,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB;
    }

    display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
    }


    fly(){
        this.chain.bodyA = null;
    }

    attach(body1){
        this.chain.bodyA = body1;
    }
    
}