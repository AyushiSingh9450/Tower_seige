class Polygon {

    constructor(x, y, r){

        var options = {
             density: 5
        }

        this.body = Bodies.circle(x, y, 30, options);
        this.x = x;
        this.y = y;
        this.r = 30;

        this.image = loadImage("polygon.png");

        World.add(world, this.body)
    }

    display(){

        var polygonPos = this.body.position;

        push();

        translate(polygonPos.x, polygonPos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r*2, this.r*2);

        pop();
    }
}