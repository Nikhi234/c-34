 
 class Snow
 
 {

  constructor( x , y , radius )

  {


    var options = 

    {

     restitution : 0.1,
     frictionAir : 0.05,
     isStatic : false,

    }

   this.body = Bodies.circle( x , y , radius ,  options );
   this.radius = radius;

   this.image = loadImage( "snow4.webp" )

   World.add( world , this.body );

  }

  display()

  {

   var pos = this.body.position;
   var angle = this.body.angle;

   push()

   translate( pos.x , pos.y );
   rotate(angle);
   imageMode(CENTER);
   image( this.image , 0 , 0 , this.radius , this.radius );
   pop();

  }

 }