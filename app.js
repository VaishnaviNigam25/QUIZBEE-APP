var naam=prompt("Enter Your name to begin the Game...")

var checkbtn = document.getElementById('check');
var response = document.getElementById('response');
var rightanswer =document.getElementById('rightanswer');
var nextbtn = document.getElementById('next');
var firstnum = document.getElementById('multiplier');
var answer = document.getElementById('ans');
var secondnum = document.getElementById('multipliend');
var rightAnsSound = document.getElementById("rightAnsSound"); 
var wrongAnsSound = document.getElementById("wrongAnsSound"); 

checkbtn.addEventListener("click",checkans);
nextbtn.addEventListener("click",nextques);
function checkans(){
   if(answer.value==(firstnum.innerText*secondnum.innerText))
{
    
    rightAnsSound.play();
    response.innerHTML="Good Job "+ naam +" ✔️";
    response.style.color ="green";
}
else{
    
    wrongAnsSound.play();
    response.innerHTML="AWAPS ❌ TRY AGAIN..";
    response.style.color ="red";
    rightanswer.innerText="Right answer is = "+firstnum.innerText*secondnum.innerText;
    rightanswer.style.color ="green";
}
}
function nextques(){
firstnum.innerText = Math.floor((Math.random() * 10) + 1);
secondnum.innerText = Math.floor((Math.random() * 10) + 1);

response.innerHTML="";
rightanswer.innerText="";
answer.innerText = "";   
}

