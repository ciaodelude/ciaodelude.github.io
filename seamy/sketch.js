var x1,y1,x2,y2,y3;
var xspeed;

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
  }

  var screenNum, click;
  function setup() {
    createCanvas(414, 896);
    screenNum = 1;
    click = 0;
    textSize(30);
    fill(0,150,80);
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
  text("Seamy",150,450);
  // for(let i=0;i<4;i++){
  //   rotate(x);
  //   x+=0.02;
    image(logoimg,150,230,110,150);
}
else if (screenNum == 2) // choosing language
    {
      fill(0);
      background(225);
      textSize(18);
      textFont(mytext2);
      text('Hi, please choose your language:',60,100);

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
    textSize(14);
    textFont(mytext);
    text("Skip",170,550);

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
  else if(screenNum == 4) //onboarding 2
    {
      fill(0);
  background(225);
  textSize(18);
  textFont(mytext2);
  text("Step 2",160,150);

  textSize(18);
  textFont(mytext2);
  text("Rate price",140,200);

    textSize(14);
    textFont(mytext);
    text("Skip",170,550);

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
   image(on2,x1,y1,130,130);
   if(x1<110){
     x1=x1+xspeed;
   }
}
else if(screenNum == 5) //onboarding 3
  {
fill(0);
background(225);
textSize(18);
textFont(mytext2);
text("Step 3",160,150);

textSize(18);
textFont(mytext2);
text("Set up availability",100,200);

  textSize(14);
  textFont(mytext);
  text("Skip",170,550);

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
     image(on3,x1,y3,60,100);
     if(x1<170){
       x1=x1+xspeed;}
}

else if(screenNum == 6) //dashboard
  {
background(225);
textSize(16);
textFont(mytext2);
text("Dashboard",160,50);

textSize(24);
textFont(mytext2);
text("$235",100,200);

  textSize(12);
  textFont(mytext);
  text("Availability",170,250);
  textSize(14);
  textFont(mytext2);
  text("Oct9,2021-Oct 28,2021",170,280);

  textSize(14);
  textFont(mytext);
  text("Next",340,650);

  textSize(14);
  textFont(mytext);
  text("Back",30,650);
}
}

//Screen touch function
function touchStarted(){
  screenNum=2;
}


//Mouse clicked function

// function mouseClicked()
// {
//   if(mouseX < 414 && mouseX > 0 && mouseY > 0 && mouseY < 700)
//     {
//       screenNum = 2;
//     }
//   else if( mouseX < 380 && mouseX > 100 && mouseY > 420 && mouseY < 480)
//     {
//       screenNum = 3;
//     }
// }
