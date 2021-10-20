var x1,y1,x2,y2,y3;
var xspeed;
var x=0;

function preload(){
  mytext=loadFont('Montserrat/Montserrat-Regular.ttf');
  mytext2=loadFont('Montserrat/Montserrat-Bold.ttf');
  logoimg=loadImage('assets/logo.png');
  eng=loadImage('assets/american.png');
  chn=loadImage('assets/chinese.png');
  esp=loadImage('assets/spanish.png');
  ind=loadImage('assets/indian.png');
  ina=loadImage('assets/indo.png');
  on1=loadImage('assets/on1.png');
  on2=loadImage('assets/on2.png');
  on3=loadImage('assets/on3.png');
  arrow=loadImage('assets/arrow.png');
  button=loadImage('assets/button.png');
  ruler=loadImage('assets/ruler.png');
  needle=loadImage('assets/needle.png');
  scissor=loadImage('assets/scissor.png');
  machine=loadImage('assets/machine.png');
  zipper=loadImage('assets/zipper.png');
  }

  var screenNum, click;
  function setup() {
    createCanvas(414, 896);
    screenNum = 1;
    click = 0;


    textFont(mytext2);
    x1=-100;
    y1=300;
    x2=400;
    y2=380;
    y3=330;
    xspeed=8;
}

function draw() {
  if(screenNum == 1) //home screen
    {
  background(225);
  textSize(30);
  fill(0,150,80);
  text("Seamy",150,450);
  textSize(10);
  fill(0);
  text("(click 'Seamy' to proceed)",130,550);

  // // for(let i=0;i<4;i++){
  // //   rotate(x);
  // //   x+=0.02;
  // rotateX(millis() / 1000);
  x+= 0.02;
translate (width/2, 300);
rotate(x);
    image(logoimg,0,0,110,150);
}

else if (screenNum == 2) // choosing language
    {
      fill(0);
      background(225);
      textSize(18);
      textFont(mytext2);
      text('Hi, please choose your language:',60,100);
      textSize(10);
      fill(0);
      text("(click ONLY button to proceed)",120,130);


      textSize(16);
      textFont(mytext);
      text('English',100,200);
      image(eng,50,180,30,30);

      textSize(16);
      text('中文',100,250);
      image(chn,50,230,30,30);

      textSize(16);
      text('Español',100,300);
      image(esp,50,280,30,30);

      textSize(16);
      text('Hindi',100,350);
      image(ind,50,330,30,30);

      textSize(16);
      text('Bahasa',100,400);
      image(ina,50,380,30,30);

      //CTA
      noStroke();
      fill(163,67,82);
      rect(100,500,200,50);
      image(arrow,190,515,20,20);
    }
    else if(screenNum == 3) //onboarding 1
      {
    fill(0);
    background(225);
    textSize(18);
    textFont(mytext2);
    text("Step 1",160,150);

    textSize(18);
    textFont(mytext2);
    text("Choose skill set",110,200);
    // textSize(14);
    // textFont(mytext);
    // text("Skip",170,550);

    textSize(14);
    textFont(mytext);
    text("Next",340,650);

    textSize(14);
    textFont(mytext);
    text("Back",30,650);

     //image rolling
     noStroke();
     fill(230,211,186);
     circle(x2,y2,150);
     if(x2>200){
       x2=x2-xspeed;
     }
    image(on1,x1,y1,130,150);
    if(x1<110){
      x1=x1+xspeed;
    }

  }
//   else if(screenNum == 4) //onboarding 2
//     {
//       fill(0);
//   background(225);
//   textSize(18);
//   textFont(mytext2);
//   text("Step 2",160,150);
//
//   textSize(18);
//   textFont(mytext2);
//   text("Rate price",140,200);
//
//     textSize(14);
//     textFont(mytext);
//     text("Skip",170,550);
//
//     textSize(14);
//     textFont(mytext);
//     text("Next",340,650);
//
//     textSize(14);
//     textFont(mytext);
//     text("Back",30,650);
//
// //image rolling
//     noStroke();
//     fill(230,211,186);
//     circle(x2,y2,150);
//     if(x2>200){
//       x2=x2-xspeed;
//     }
//    image(on2,x1,y1,130,130);
//    if(x1<110){
//      x1=x1+xspeed;
//    }
// }
// else if(screenNum == 5) //onboarding 3
//   {
// fill(0);
// background(225);
// textSize(18);
// textFont(mytext2);
// text("Step 3",160,150);
//
// textSize(18);
// textFont(mytext2);
// text("Set up availability",100,200);
//
//   textSize(14);
//   textFont(mytext);
//   text("Skip",170,550);
//
//   textSize(14);
//   textFont(mytext);
//   text("Next",340,650);
//
//   textSize(14);
//   textFont(mytext);
//   text("Back",30,650);
//
//   //image rolling
//       noStroke();
//       fill(230,211,186);
//       circle(x2,y2,150);
//       if(x2>200){
//         x2=x2-xspeed;
//       }
//      image(on3,x1,y3,60,100);
//      if(x1<170){
//        x1=x1+xspeed;}
// }

else if(screenNum == 4) //dashboard
  {
background(225);
textSize(16);
textFont(mytext2);
noStroke();
fill(255);
rect(0,0,414,80);
fill(0);
text("Choose service",140,50);
//small text
textFont(mytext);
textSize(12);
text("Custom",90,140);
text("Alteration",270,140);
text("Hand sewn",80,340);
text("Repair",280,340);
text("Accessories",75,540);
text("Redesign",275,540);
//line
strokeWeight(2);
stroke(163,67,82);
noFill();
rect(50,150,120,150,20);
rect(240,150,120,150,20);
rect(50,350,120,150,20);
rect(240,350,120,150,20);
rect(50,550,120,150,20);
rect(240,550,120,150,20);
image(machine,270,200,70,60);
image(ruler,80,200,60,60);
image(button,270,400,60,60);
image(needle,80,400,60,60);
image(zipper,90,580,40,80);
image(scissor,275,590,50,70);

}
else if(screenNum == 5) //dashboard
  {
background(225);
textSize(16);
textFont(mytext2);
noStroke();
fill(255);
rect(0,0,414,80);
fill(0);
text("Choose service",140,50);
//small text
textFont(mytext);
textSize(12);
text("Custom",90,140);
text("Alteration",270,140);
text("Hand sewn",80,340);
text("Repair",280,340);
text("Accessories",75,540);
text("Redesign",275,540);
//line
strokeWeight(2);
stroke(163,67,82);
fill(163,67,82);
rect(50,150,120,150,20);
noFill();
rect(240,150,120,150,20);
rect(50,350,120,150,20);
rect(240,350,120,150,20);
rect(50,550,120,150,20);
rect(240,550,120,150,20);
image(machine,270,200,70,60);
image(ruler,80,200,60,60);
image(button,270,400,60,60);
image(needle,80,400,60,60);
image(zipper,90,580,40,80);
image(scissor,275,590,50,70);
}
}
//Screen touch function
function touchStarted(){
  screenNum=2;
}


//Mouse clicked function

function mousePressed()
{
  if(mouseX < 414 && mouseX > 200 && mouseY > 300 && mouseY < 500)
    {
      screenNum = 2;
    }
  else if( mouseX < 300 && mouseX > 80 && mouseY > 495 && mouseY < 535)
    {
      screenNum = 3;
    }
    else if( mouseX < 414 && mouseX > 300 && mouseY > 550 && mouseY < 650)
      {
        screenNum = 4;
      }


  }
