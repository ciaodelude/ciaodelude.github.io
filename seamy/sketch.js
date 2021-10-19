
function preload(){
  mytext=loadFont('Montserrat/Montserrat-Regular.ttf');
  mytext2=loadFont('Montserrat/Montserrat-Bold.ttf');
  logoimg=loadImage('assets/logo.png');
  }


  var screenNum, click;
  function setup() {
    createCanvas(414, 896);
    screenNum = 1;
    click = 0;
    textSize(30);
    fill(0);
    textFont(mytext);
  // image(logoimg,150,230,110,150);
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
      background(225);
      textSize(18);
      textFont(mytext2);
      text('Hi, please choose your language:',60,100);

      textSize(16);
      textFont(mytext);
      text('English',100,200);

      textSize(16);
      text('中文',100,250);

      textSize(16);
      text('Spanish',100,300);

      textSize(16);
      text('Hindi',100,350);

      textSize(16);
      text('Bahasa',100,400);
    }
    else if(screenNum == 3) //onboarding
      {
    background(225);
    textSize(18);
    textFont(mytext2);
    text("Step 1",160,150);

    textSize(18);
    textFont(mytext2);
    text("Choose skill set",110,200);

      image(logoimg,130,250,110,150);

      textSize(14);
      textFont(mytext);
      text("Skip",170,550);

      textSize(14);
      textFont(mytext);
      text("Next",340,650);

      textSize(14);
      textFont(mytext);
      text("Back",30,650);
  }
  else if(screenNum == 4) //onboarding 2
    {
  background(225);
  textSize(18);
  textFont(mytext2);
  text("Step 2",160,150);

  textSize(18);
  textFont(mytext2);
  text("Rate price",140,200);

    image(logoimg,130,250,110,150);

    textSize(14);
    textFont(mytext);
    text("Skip",170,550);

    textSize(14);
    textFont(mytext);
    text("Next",340,650);

    textSize(14);
    textFont(mytext);
    text("Back",30,650);
}
else if(screenNum == 5) //onboarding 2
  {
background(225);
textSize(18);
textFont(mytext2);
text("Step 3",160,150);

textSize(18);
textFont(mytext2);
text("Set up availability",100,200);

  image(logoimg,130,250,110,150);

  textSize(14);
  textFont(mytext);
  text("Skip",170,550);

  textSize(14);
  textFont(mytext);
  text("Next",340,650);

  textSize(14);
  textFont(mytext);
  text("Back",30,650);
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
  screenNum=3;
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
