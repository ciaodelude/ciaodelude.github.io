var table;
var dim;
var button;
var buttonP;
var buttonF;
var buttonC;
var venue;
var calorieGoal;
var itemsOrdered = []; // this is an array of the calories of each item ordered
var buttonclicked0, buttonclicked1, buttonClicked2, buttonClicked3, buttonClicked4, buttonClicked5, buttonClicked6, buttonClicked7, buttonClicked8, buttonClicked9;

function preload() {
  table = loadTable('assets/Pioneer Dining Hall2.csv', 'csv', 'header');
  img = loadImage('assets/pioneer.png');
  startBG = loadImage('assets/CalGoal 1.png');
  diningBG = loadImage('assets/Dining Screen.png');
  pandaBG = loadImage('assets/Panda Express Screen.png');
  starBG = loadImage('assets/Starbucks Screen.png');
  wayBG = loadImage('assets/Subway Screen.png');
  blackCanvas = loadImage('assets/black canvas.png');
  firstData = loadJSON('https://api.nutritionix.com/v1_1/search/starbucks?results=0:50&fields=item_name,brand_name,item_id,nf_calories&appId=1977d539&appKey=3b354c046a7985f6a86c01952ef32732%E2%80%94')
  secData = loadJSON('https://api.nutritionix.com/v1_1/search/subway?results=0:50&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')
  thirdData = loadJSON('https://api.nutritionix.com/v1_1/search/panda%20express?results=0:50&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')
}

function setup() {
  createCanvas(1250, 750);
  background(0);
  colorMode(RGB);
  angleMode(DEGREES);

  noStroke();

  calorieGoal = 2000;
  buttonClicked0 = false;
  buttonClicked1 = false;
  buttonClicked2 = false;
  buttonClicked3 = false;
  buttonClicked4 = false;
  buttonClicked5 = false;
  buttonClicked6 = false;
  buttonClicked7 = false;
  buttonClicked8 = false;
  buttonClicked9 = false;
  venue = 'start';
  // noLoop();
}

//Carbs
function changeCarbs() {
  clear();
  background(0);
  stroke(255);
  line(70, 220, 400, 220);
  noStroke()
  image(img, 35, -30, 400, 300);
  fill(180);
  textSize(20);
  text('Breakfast Menu', 160, 200);
  text('Amount of Carbs', 150, 250);
  fill(180);
  textSize(10);
  text('(Disclaimer : Data is Serving per portion)', 140, 270);
  textSize(14);
  textAlign(LEFT, TOP);
  for (let s = 0; s < table.getRowCount(); s++) {
    var name = table.getString(s, 'Menu Item');
    var carbs = table.getNum(s, 'Total Carbs');
    var x = 600;
    var y = 50 + (s * 60);
    var size = map(carbs, 0, 410, 0, 1000);
    var h = 10;
    noStroke();
    fill(200, 200, 0);
    rect(x, y, size, h, 40);
    fill(180);
    text(name, x, y + 15);
  }
}
//Calories
function changeCalories() {
  //   x = lerp(x, mouseX, 0.05);
  // y = lerp(y, mouseY, 0.05);
  clear();
  background(0);
  stroke(255);
  line(70, 220, 400, 220);
  noStroke()
  image(img, 35, -30, 400, 300);
  fill(180);
  textSize(20);
  text('Breakfast Menu', 160, 200);
  text('Amount of Calories', 150, 250);
  fill(180);
  textSize(10);
  text('(Disclaimer : Data is Serving per portion)', 140, 270);
  textSize(14);
  textAlign(LEFT, TOP);
  for (let r = 0; r < table.getRowCount(); r++) {
    var name = table.getString(r, 'Menu Item');
    var calories = table.getNum(r, 'Calories');
    var x = 600;
    var y = 50 + (r * 60);
    var size = map(calories, 0, 410, 0, 300);
    var h = 10;
    noStroke();
    fill(200, 0, 0);
    rect(x, y, size, h, 40);
    fill(180);
    text(name, x, y + 15);
  }

  //Protein
}

function changeProtein() {
  clear();
  background(0);
  stroke(255);
  line(70, 220, 400, 220);
  noStroke()
  image(img, 35, -30, 400, 300);
  fill(180);
  textSize(20);
  text('Breakfast Menu', 160, 200);
  text('Amount of Proteins', 150, 250);
  fill(180);
  textSize(10);
  text('(Disclaimer : Data is Serving per portion)', 140, 270);
  textSize(14);
  textAlign(LEFT, TOP);
  for (let s = 0; s < table.getRowCount(); s++) {
    var name = table.getString(s, 'Menu Item');
    var protein = table.getNum(s, 'Protein');
    var x = 600;
    var y = 50 + (s * 60);
    var size = map(protein, 0, 200, 0, 1200);
    var h = 10;
    noStroke();
    fill(0, 200, 0);
    rect(x, y, size, h, 40);
    fill(180);
    text(name, x, y + 15);
  }
}
//Fat
function changeFat() {
  clear();
  background(0);
  stroke(255);
  line(70, 220, 400, 220);
  noStroke()
  image(img, 35, -30, 400, 300);
  fill(180);
  textSize(20);
  text('Breakfast Menu', 160, 200);
  text('Amount of Fat', 150, 250);
  fill(180);
  textSize(10);
  text('(Disclaimer : Data is Serving per portion)', 140, 270);
  textSize(14);
  textAlign(LEFT, TOP);
  for (let s = 0; s < table.getRowCount(); s++) {
    var name = table.getString(s, 'Menu Item');
    var fat = table.getNum(s, 'Total Fat');
    var x = 600;
    var y = 50 + (s * 60);
    var size = map(fat, 0, 200, 0, 1200);
    var h = 10;
    noStroke();
    fill(200, 0, 200);
    rect(x, y, size, h, 40);
    fill(180);
    text(name, x, y + 15);
  }
}

function draw() {
  ////Panda Express/////
  for (var i = 0; i < thirdData.hits.length; i++) {
    if (thirdData.hits[i].fields.item_name = 'Orange Chicken') {
      pChicken = thirdData.hits[i].fields.nf_calories; //Orange Chicken, 490
    };

    if (thirdData.hits[i].fields.item_name = 'Fried Rice') {
      pRice = thirdData.hits[i].fields.nf_calories; //Fried Rice, 520
    };

    if (thirdData.hits[i].fields.item_name = 'Beijing Beef') {
      pBeef = thirdData.hits[i].fields.nf_calories; //Beijing Beef, 470
    };

    if (thirdData.hits[i].fields.item_name = 'Eggplant Tofu') {
      pTofu = thirdData.hits[i].fields.nf_calories; //Eggplant Tofu, 340
    };
  };

  ///Starbucks/////
  for (var i = 0; i < firstData.hits.length; i++) {
    if (firstData.hits[i].fields.item_name = 'Strawberry Acai Starbucks Refereshers Beverage, Venti') {
      sStrawberry = firstData.hits[i].fields.nf_calories; //Strawberry Acai, 130
    };
    if (firstData.hits[i].fields.item_name = 'Starbucks Bottled Mocha Frappuccino Coffee Drink') {
      sMocha = firstData.hits[i].fields.nf_calories; //Mocha Frappuccino, 180
    };
    if (firstData.hits[i].fields.item_name = 'Starbucks Bottled Caramel Frappuccino Coffee Drink') {
      sCaramel = firstData.hits[i].fields.nf_calories; //Caramel Frappuccino, 200
    };
    if (firstData.hits[i].fields.item_name = 'Very Berry Hibiscus Starbucks Refreshers Beverage, Venti') {
      sVeryBerry = firstData.hits[i].fields.nf_calories; //Very Berry Hibiscus, 100
    };
  };

  ///Subway/////
  for (var i = 0; i < secData.hits.length; i++) {
    if (secData.hits[i].fields.item_name = 'Footlong Subway Melt') {
      wFTmelt = secData.hits[i].fields.nf_calories; //Footlong Subway Melt, 820
    };
    if (secData.hits[i].fields.item_name = '6 inch Subway Melt') {
      wSmelt = secData.hits[i].fields.nf_calories; //6 inch Subway Melt, 410
    };
    if (secData.hits[i].fields.item_name = 'Footlong Subway Club') {
      wFTclub = secData.hits[i].fields.nf_calories; //Footlong Subway Club, 620
    };
    if (secData.hits[i].fields.item_name = '6 inch Roast Beef') {
      wSbeef = secData.hits[i].fields.nf_calories; //6 inch Roast Beef, 320
    };
  };

  if (venue == 'start') {
    background(startBG);
    // print (pChicken);
    if (buttonClicked7) {
      venue = 'dining'
      buttonClicked7 = false;
    };
  }

  if (venue == 'blackCanvas') {
    background(blackCanvas);
    noLoop();
    button = createButton("Calories");
    buttonC = createButton("Carbs");
    buttonP = createButton("Protein");
    buttonF = createButton("Fat");
    button.mousePressed(changeCalories);
    buttonP.mousePressed(changeProtein);
    buttonC.mousePressed(changeCarbs);
    buttonF.mousePressed(changeFat);
    button.position(130, 350);
    button.size(200, 50);
    buttonC.position(130, 450);
    buttonC.size(200, 50);
    buttonP.position(130, 550);
    buttonP.size(200, 50);
    buttonF.position(130, 650);
    buttonF.size(200, 50);
    stroke(255);
    line(70, 220, 400, 220);
    noStroke()
    image(img, 35, -30, 400, 300);
    fill(180);
    textSize(20);
    text('Breakfast Menu', 160, 200);
    text('Select Data ', 180, 250);
    fill(180);
    textSize(10);
    text('(Disclaimer : Data is Serving per portion)', 140, 270);
    textSize(14);
    textAlign(LEFT, TOP);
  }

  if (buttonClicked8) {
    if (buttonClicked8) {
      venue = 'blackCanvas' ///link to dining hall page
      buttonClicked8 = false;
    };
  }

  if (venue == 'dining') {
    background(diningBG);
    if (buttonClicked8) {
      venue = 'blackCanvas' ///link to dining hall page
      buttonClicked8 = false;
    }
    if (buttonClicked9) {
      venue = 'panda'
      buttonClicked9 = false;
    };
  }

  if (venue == 'panda') {
    background(pandaBG);
    noStroke();
    fill(138, 140, 141, 95);
    circle(600, 400, 300);
    if (buttonClicked1) {
      itemsOrdered.push(pChicken);
      buttonClicked1 = false;
    };
    if (buttonClicked2) {
      itemsOrdered.push(pRice);
      buttonClicked2 = false;
    };
    if (buttonClicked3) {
      itemsOrdered.push(pBeef);
      buttonClicked3 = false;
    };
    if (buttonClicked4) {
      itemsOrdered.push(pTofu);
      buttonClicked4 = false;
    };
    if (buttonClicked5) {
      venue = 'starbucks';
      buttonClicked5 = false;
    };
    if (buttonClicked6) {
      venue = 'subway';
      buttonClicked6 = false;
    };
    if (buttonClicked0) {
      splice(itemsOrdered);
      venue = 'dining';
      buttonClicked0 = false;
    };
  }

  if (venue == 'starbucks') {
    background(starBG);
    noStroke();
    fill(138, 140, 141, 95);
    circle(600, 400, 300);
    if (buttonClicked1) {
      itemsOrdered.push(sStrawberry);
      buttonClicked1 = false;
    };
    if (buttonClicked2) {
      itemsOrdered.push(sMocha);
      buttonClicked2 = false;
    };
    if (buttonClicked3) {
      itemsOrdered.push(sCaramel);
      buttonClicked3 = false;
    };
    if (buttonClicked4) {
      itemsOrdered.push(sVeryBerry);
      buttonClicked4 = false;
    };
    if (buttonClicked5) {
      venue = 'subway'
      buttonClicked5 = false;
    };
    if (buttonClicked6) {
      venue = 'panda'
      buttonClicked6 = false;
    };
    if (buttonClicked0) {
      splice(itemsOrdered);
      venue = 'dining';
      buttonClicked0 = false;
    };
  }

  if (venue == 'subway') {
    background(wayBG);
    noStroke();
    fill(138, 140, 141, 95);
    circle(600, 400, 300);
    if (buttonClicked1) {
      itemsOrdered.push(wFTmelt);
      buttonClicked1 = false;
    };
    if (buttonClicked2) {
      itemsOrdered.push(wSmelt);
      buttonClicked2 = false;
    };
    if (buttonClicked3) {
      itemsOrdered.push(wFTclub);
      buttonClicked3 = false;
    };
    if (buttonClicked4) {
      itemsOrdered.push(wSbeef);
      buttonClicked4 = false;
    };
    if (buttonClicked5) {
      venue = 'panda'
      buttonClicked5 = false;
    };
    if (buttonClicked6) {
      venue = 'starbucks'
      buttonClicked6 = false;
    };
    if (buttonClicked0) {
      splice(itemsOrdered);
      venue = 'dining';
      buttonClicked0 = false;
    };
  }
  drawPie(calorieGoal, itemsOrdered);
}

function drawPie(total, itemArray) {
  let startValue = 0;
  let range = 0;
  let slicecolor = (254, 132, 132);
  for (var i = 0; i < itemArray.length; i++) {
    range = itemArray[i] / total;
    drawSlice(slicecolor, 600, 400, 300, startValue, startValue + range);
    startValue += range;
  }
}

function mouseClicked() {
  if (mouseX > 90 && mouseX < 140 && mouseY > 50 && mouseY < 135) {
    buttonClicked0 = true;
  };
  if (mouseX > 81 && mouseX < 360 && mouseY > 241 && mouseY < 318) {
    buttonClicked1 = true;
  };
  if (mouseX > 81 && mouseX < 360 && mouseY > 326 && mouseY < 410) {
    buttonClicked2 = true;
  };
  if (mouseX > 81 && mouseX < 360 && mouseY > 420 && mouseY < 495) {
    buttonClicked3 = true;
  };
  if (mouseX > 81 && mouseX < 360 && mouseY > 510 && mouseY < 590) {
    buttonClicked4 = true;
  };
  if (mouseX > 81 && mouseX < 300 && mouseY > 640 && mouseY < 685) {
    buttonClicked5 = true;
  };
  if (mouseX > 900 && mouseX < 1150 && mouseY > 640 && mouseY < 685) {
    buttonClicked6 = true;
  };
  if (mouseX > 490 && mouseX < 760 && mouseY > 460 && mouseY < 540) {
    buttonClicked7 = true;
  };
  if (mouseX > 230 && mouseX < 530 && mouseY > 380 && mouseY < 520) {
    buttonClicked8 = true;
  };
  if (mouseX > 710 && mouseX < 1010 && mouseY > 380 && mouseY < 520) {
    buttonClicked9 = true;
  };
}

/**
 * drawSlice - draw colored arc based on angle percentages. slide 13
 * Adjust angles so that 0% starts at top (actually -90).
 * @param {color} fColor - fill color
 * @param {number} x - center x
 * @param {number} y - center y
 * @param {number} d - diameter
 * @param {float} percent1 - starting percentage
 * @param {float} percent2 - ending percentage
 */

function drawSlice(fColor, x, y, d, percent1, percent2) {
  fill(fColor);
  arc(x, y, d, d, -90 + percent1 * 360, -90 + percent2 * 360);
}
