class paper{
    constructor(x,y,r){
        var options={
            isStactic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.r=r
        
    
       
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body) 
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(RADIUS);
        strokeWeight(3)
        fill(255,0,255)
        ellipse(0,0,this.r);
        pop()   
    }
}