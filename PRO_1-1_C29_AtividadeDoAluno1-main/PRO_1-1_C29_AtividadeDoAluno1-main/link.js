class Link{

constructor(bodyA,bodyB){

var lest_link = bodyA.body.bodies.length-2;//penultimo elementodo composit
this.link= Constraint.create({
    bodyA: bodyA.body.bodies[lest_link],
    pointA: {x:0,y:0},
    bodyB: bodyB,
    pointB: {x:0,y:0},
    length: -10,
    stiffness: 0.01
});
World.add(engine.world,this.link);

}

}