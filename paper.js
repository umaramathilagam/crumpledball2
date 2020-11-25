class paper{
    constructor(x,y,r){
        var option = {
            isStatic: false,
            restitution:0.4,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r/2, option);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        imageMode(CENTER);
        image(this.image, 0,0 ,this.r, this.r);
        pop();
    }
}