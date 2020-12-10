class box
 {
   constructor(width,height,x,y)
   {
   var options =
   {
     isStatic:true
   }
    this.body = Bodies.rectangle(0,0,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
 }


    display()
    {
        var pos = this.boddy.position;
        fill(red)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
 

}