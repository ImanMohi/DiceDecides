var n = Math.random();
var randomNumber1 = Math.floor(n*6)+1;
var address1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", address1 );

var m =Math.random();
var randomNumber2 = Math.floor(m*6)+1;
var address2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", address2 );

if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelector(".container h1").innerHTML = "Draw";
} 