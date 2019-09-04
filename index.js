var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //yeh humein random number lakar dega itni c baat hai

var randomDiceImage = "dice" +randomNumber1 + ".png";  //  yeh aesay kaam karega jese k jo number ayega hamaray paas hum usey concatinate kar k us number actual part k sath
// k sath jordengay tw woh kya karegay us property ko as a string lekar parhega and us random number ko image name k sath jordega

var randomImageSource = "images/" +randomDiceImage;  // yeh bhi yehi kaam karega jo upper step mein kara hai or us path ko pura read karega yeh images k folder k andar jo bhi saamaan hai

var image1 = document.querySelectorAll("img")[0];  // hamaray pass do images thi tw humein usko querySelectorALL k through select kara then use us ka array number bataya
  // then next step jo k neechay hoa wa hai us mein uski value set kardi pehlay step mein pick kara then set kardi hum isey aik e step mein karsaktay thay lekin humne isey
  //2 step mein kara hai takay proper understand hosakayy

image1.setAttribute("src" , randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" +randomNumber2 + ".png"; //yeh wala step uper k 2nd and 3rd ko mila kar kara hai

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); // is mein upper walay step ki attribute set kari hai

if(randomNumber1 > randomNumber2) {  // is mein condition lagai hai k jo bhi jeetega jhandaa usey milega
  document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🏁 Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
