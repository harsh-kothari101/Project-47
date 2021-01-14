class FootBall{
    constructor(x,y,w,h){
        this.image=loadsImage("footballs/F.png")
        this.body=Bodies.rectangle(x,y,w,h)
        this.width = w;
        this.height = h;
        World.add(world,this.body);
       
    }

    display(){
        var posx = this.body.position.x
        var posy=this.body.position.y
        push();
        rotate(angle);
        translate(posx,posy)
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this.height);
        pop();
        
    }
}