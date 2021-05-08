
var randomenumber1 = Math.floor(Math.random() * 6) + 1;  // 1 - 6 number will be generated

var randomdiceImage = "Dice" + randomenumber1 + ".png";   // dice1.png - dice6.png will be generated

var randomsourceimage = "images/" + randomdiceImage;   //image/dice 1 - 6 .png will generate.

var image1 = document.querySelectorAll("img")[0];   // image 1 will be selected

image1.setAttribute("src", randomsourceimage);    // attribute name changed

// for image 2 dice changer:-------------------------------------

var randomnumber2 = Math.floor(Math.random() * 6) + 1; // random no. will be generated btween 1 - 6;

var randomdiceimage2 = "Dice" + randomnumber2 + ".png";  // dice 1 -6 will be generated; 

var randomsourceimage2 = "images/" + randomdiceimage2; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomsourceimage2);

if(randomenumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomenumber1 == randomnumber2)
{
    document.querySelector("h1").innerHTML= "DRAW";
}
else{
    document.querySelector("h1").innerHTML= "player 2 wins";
}
