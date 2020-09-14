class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        //var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
}