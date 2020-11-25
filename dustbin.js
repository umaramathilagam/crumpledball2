class dustbin{
    constructor(x,y,w,h){
        var option = {
            isStatic: true,
           
        }
        this.body = Bodies.rectangle(x,y,w,h, option);
        this.width = w;
        this.height = h;
       // this.image = loadImage("dustbin.png");
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y,this.width, this.height);
        //imageMode (CENTER);
        //image (this.image, 0, 0, this.width, this.height);
    }
}