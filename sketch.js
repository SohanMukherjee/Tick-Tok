var hr,min,sec,hourAngle


function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  translate(300,300)
  rotate(-90)
  hr = hour();
  min = minute();
  sec = second();
 hourAngle=map(hr%12,0,12,0,360)
 secAngle=map(sec,0,60,0,360)
 minAngle=map(min,0,60,0,360)
 push()
 rotate(hourAngle)
 stroke ("blue")
 strokeWeight(7)
 line (0,0,40,0)
 pop ()

 push()
 rotate(secAngle)
 stroke ("green")
 strokeWeight(5)
 line (0,0,50,0)
 pop ()

 push()
 rotate(minAngle)
 stroke ("red")
 strokeWeight(6)
 line (0,0,60,0)
 pop ()

 noFill()
 strokeWeight(9)

 //second 
 stroke("green")
 //x,y,width,height,start,stop
 arc(0,0,300,300,0,secAngle)

//minute
 stroke("red")
 //x,y,width,height,start,stop
 arc(0,0,275,275,0,minAngle)

//hour
 stroke("blue")
 //x,y,width,height,start,stop
 arc(0,0,250,250,0,hourAngle)


 
}