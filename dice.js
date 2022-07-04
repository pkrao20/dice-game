//for image 1
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomdiceimage1="images/dice"+randomNumber1+".png";// for changing img1
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage1);

// for image 2
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomdiceimage2="images/dice"+randomNumber2+".png";// for changing img2
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);


// for comparing values
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="DRAW";
}
