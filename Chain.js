class Chain{
    constructor(bodyA, bodyB){
        var jr ={
            bodyA: bodyA,
            bodyB: bodyB,
            length: 20,
            stiffness: 0.03
        }
        this.chain = Matter.Constraint.create(jr)
        World.add(world,this.chain)
    }
    display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}