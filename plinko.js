class Plinko {
    constructor(x, y) {

        var plinkoptions = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, plinkoptions);
        World.add(world, this.body);

    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("gray");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

};