 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine;  var world;  var body;

 var back; var snows=[];

 function preload()

 {

  back = loadImage( "snow3.jpg" );

 }

function setup() 

{
  var canvas = createCanvas( 1350 , 700);

  engine = Engine.create();
  world = engine.world;



  

}

function draw() 

{
  background(back);  

  Engine.update(engine);

  if( frameCount%50===0 )

  {

   snows.push(new Snow( random( 100 , 1250 ) , -10 , 30 ));

  }

  for( var i=0; i<snows.length; i++ )

  {

  snows[ i ].display();

  }

  drawSprites();

  
  
}