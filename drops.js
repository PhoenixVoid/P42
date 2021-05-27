class Drops{

    constructor(x,y){
        
        var options ={
            friction : 0.1
        }

        this.x = x
        this.y = y;
        this.r = 5;
        this.rain = Bodies.circle(x, y, 5, options);
        World.add(world, this.rain);
        
    }

    display(){

        translate(this.rain.position.x, this.rain.position.y);
        strokewWeight(1);
        stroke("white");
        fill(81, 189, 198);
        ellipse(0, 0, 5);
        ellipseMode(CENTER);

    }

    update(){

        if(this.rain.position > height){
            Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)});
        }
    }

}