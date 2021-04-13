/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let activePlayer,scores,roundScore;

scores=[0,0],
roundScore=0;
activePlayer=0;
dice=6;





dice=Math.floor(Math.random()*6 )+1;

//DOM MAnipulation
//document.querySelector("#current-"+activePlayer).textContent=dice//document object is the object that we need to access DOM

document.querySelector("#current-"+activePlayer).innerHTML='<em>'+dice+'<em>'//single quotes need for HTML otherwise it will be reconied as js

// the above are Setters because we set valuess to DOM 

// DOM reading
var x=document.querySelector('#score-1').textContent;
console.log(x)

//adding propertie to classes
document.querySelector('.dice').style.display='none'


document.getElementById('score-0').innerHTML='0';//getElementById() is used instead of querySelector(),it is also little faster
document.getElementById('score-1').innerHTML='0';
document.getElementById('current-1').innerHTML='0';
document.getElementById('current-0').innerHTML='0';


// function btn(){
//     console.log("inside btn")
// }

// document.querySelector('.btn-roll').addEventListener('click',btn);//call backs with event listners


document.querySelector('.btn-roll').addEventListener('click',()=>{
    var dice=Math.floor(Math.random()*6)+1;

    let diceDom=document.querySelector('.dice')
    diceDom.style.display='block';//this will show the dice which we hide in the beginning
    diceDom.src='dice-'+dice+'.png';//how to load different dice pictures


    if(dice!==1){
        roundScore+=dice;
        document.querySelector("#current-"+activePlayer).innerHTML=roundScore
        

    }else{
        roundScore=0;
        document.querySelector("#current-"+activePlayer).innerHTML=0;
        activePlayer==0?activePlayer=1:activePlayer=0;
        document.querySelector('.player-0-player').classList.toggle('active')//use of classList and toggle,here we are changing the active profile (dot and the grey background)
        document.querySelector('.player-1-player').classList.toggle('active')//toggel does remove if it exist or add if it doesn't exist in element
        // document.querySelector('.player-1-player').classList.add('active')//does same as above but here we have to mention who the current player and other playeris
        // document.querySelector('.player-0-player').classList.remove('active')
        document.querySelector(".dice").style.display='none'
        

    }

})