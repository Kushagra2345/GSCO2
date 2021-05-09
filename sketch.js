var car1,wall1,wall2,wall3,car2,car3,car4,wall4;
var speed1,speed2,speed3,speed4;
var t1,t2,t3,t4;
var bullet1,bullet2,bullet3,bullet4;
function setup() {
  createCanvas(1600,800);
  bullet1=createSprite(100, 40, 30, 30);
  bullet1.shapeColor="blue"
  bullet2=createSprite(100,140,30,30);
  bullet2.shapeColor="blue"
  bullet3=createSprite(100,240,30,30);
  bullet3.shapeColor="blue"
  bullet4=createSprite(100,340,30,30)
  bullet4.shapeColor="blue"
  t1=Math.round(random(15,83))
  t2=Math.round(random(15,83))
  t3=Math.round(random(15,83))
  t4=Math.round(random(15,83))
  speed1=Math.round(random(223,321))
  speed2=Math.round(random(223,321))
  speed3=Math.round(random(223,321))
  speed4=Math.round(random(223,321))
  weight1=Math.round(random(30,52))
  weight2=Math.round(random(30,52))
  weight3=Math.round(random(30,52))
  weight4=Math.round(random(30,52))
  wall1=createSprite(1000,40,t1,60)
  wall1.shapeColor="white"
  wall2=createSprite(1000,140,t2,60)
  wall2.shapeColor="white"
  wall3=createSprite(1000,240,t3,60)
  wall3.shapeColor="white"
  wall4=createSprite(1000,340,t4,60)
  wall4.shapeColor="white"
  a=createSprite(width/2,85,width,10)
  b=createSprite(width/2,185,width,10)
  c=createSprite(width/2,285,width,10)
  d=createSprite(width/2,385,width,10)
  a.shapeColor="purple"
  b.shapeColor="purple"
  c.shapeColor="purple"
  d.shapeColor="purple"

  bullet1.velocityX=speed1;
  bullet2.velocityX=speed2;
  bullet3.velocityX=speed3;
  bullet4.velocityX=speed4;

  
  
  

}

function draw() {
  background("black");  

  var damage1=(0.5*speed1*speed1*weight1)/(t1*t1*t1)
  var damage2=(0.5*speed2*speed2*weight2)/(t2*t2*t2)
  var damage3=(0.5*speed3*speed3*weight3)/(t3*t3*t3)
  var damage4=(0.5*speed4*speed4*weight4)/(t4*t4*t4)
 
  console.log(mouseX+","+mouseY)
  
  //wall4.debug=true;
 
  if (hasCollided(bullet1,wall1)){
    bullet1.velocityX=0;

    if (damage1>0 && damage1<=30){
      wall1.shapeColor="green"
    }
    
    if (damage1>30 && damage1<=60){
      wall1.shapeColor="yellow"
    }
    if(damage1>60){
      wall1.shapeColor="red"
    }
  }
  if (hasCollided(bullet2,wall2)){
    bullet2.velocityX=0

    
    if (damage2>0 && damage2<=30){
      wall2.shapeColor="green"
    }
    
    if (damage2>30 && damage2<=60){
      wall2.shapeColor="yellow"
    }
    if(damage2>60){
      wall2.shapeColor="red"
    }
  }
  if (hasCollided(bullet3,wall3)){
    bullet3.velocityX=0

    
    if (damage3>0 && damage3<=30){
      wall3.shapeColor="green"
    }
    
    if (damage3>30 && damage3<=60){
      wall3.shapeColor="yellow"
    }
    if(damage3>60){
      wall3.shapeColor="red"
    }
  }
  if (hasCollided(bullet4,wall4)){
    bullet4.velocityX=0

    
    if (damage4>0 && damage4<=30){
      wall4.shapeColor="green"
    }
    
    if (damage4>30 && damage4<=60){
      wall4.shapeColor="yellow"
    }
    if(damage4>60){
      wall4.shapeColor="red"
    }
  }

  drawSprites();
  textSize(30)
  fill(wall1.shapeColor)
  text("Damage : "+damage1,360,45)
  textSize(20)
  text("Speed = "+speed1,1350,20)
  text("Weight = "+weight1,1350,45)
  text("Thickness = "+t1,1350,70)
  fill(wall2.shapeColor)
  textSize(20)
  text("Speed = "+speed2,1350,120)
  text("Weight = "+weight2,1350,145)
  text("Thickness = "+t2,1350,170)
  textSize(30)
  text("Damage : "+damage2,360,145)
  fill(wall3.shapeColor)
  textSize(20)
  text("Speed = "+speed3,1350,220)
  text("Weight = "+weight3,1350,245)
  text("Thickness = "+t3,1350,270)
  textSize(30)
  text("Damage : "+damage3,360,245)
  fill(wall4.shapeColor)
  textSize(20)
  text("Speed = "+speed4,1350,320)
  text("Weight = "+weight4,1350,345)
  text("Thickness = "+t4,1350,370)
  textSize(30)
  text("Damage : "+damage4,360,345)
  textSize(30)
  fill("cyan")
  text("Damage = (Speed of bullet * Speed of bullet * Weight of bullet * 0.5) / (Thickness of wall^3)",200,460)
  fill("green")
  text("Damage range : 0 - 30 : Safe",250,520)
  fill("yellow")
  text("Damage range : 30 - 60 : Moderate Risk",250,580)
  fill("red")
  text("Damage range : >60 : High Risk",250,640)
 

}
