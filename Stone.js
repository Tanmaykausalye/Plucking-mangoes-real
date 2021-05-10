class Stone {

     constructor(){

   var options  ={

   isStatic : false,
   friction : 1,
   density : 1.2
   }

    this.body = Bodies.circle(93,493,5,options)
    
    this.r = 5

    this.image3 = loadImage("sprites/stone.png")
    
    World.add(world, this.body)
     }

   display(){

   var pos = this.body.position

   //ellipseMode(RADIUS)
   //ellipse(pos.x,pos.y,this.radius,this.radius)

   imageMode(CENTER)
   image(this.image3,pos.x,pos.y,45,45)

   }

}