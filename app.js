

// document.querySelectorAll('.tictac');

var a1 = document.querySelector('.a1');
var a2 = document.querySelector('.a2');
var a3 = document.querySelector('.a3');
var b1 = document.querySelector('.b1');
var b2 = document.querySelector('.b2');
var b3 = document.querySelector('.b3');
var c1 = document.querySelector('.c1');
var c2 = document.querySelector('.c2');
var c3 = document.querySelector('.c3');
var resetBtn = document.querySelector('.reset-btn');
var playerO = document.querySelector ('.player-O');
var playerX = document.querySelector ('.player-X');



// function playerX(event){
    
//     var userClick = event.target;
//     userClick.disabled = true;
//     userClick.textContent = 'X';
// }

var counter = 0;

function play(event){
    counter++
    var userClick = event.target;
    // userClick.disabled = true;
    if(counter % 2 == 0 && userClick.textContent === ''){
    userClick.textContent = 'X';
    // userClick.disabled = true;
    } else{
        userClick.textContent = 'O';
        // userClick.disabled = true;

    } 

    if (a1.textContent === "X"  && a2.textContent === "X" && a3.textContent === "X") {
        alert("Player X Wins");
        // for (let i = 0; i < allItems.length; i++) {
        //     a1.disabled = true;
        // }
    } else if (b1.textContent === "X"  && b2.textContent === "X" && b3.textContent === "X"){
       playerX.textContent = Number(playerX.textContent) + Number(1);
        alert("Player X Wins")
    } else if (c1.textContent === "X"  && c2.textContent === "X" && c3.textContent === "X"){
        alert("Player X Wins")
        playerX.textContent = Number(playerX.textContent) + Number(1);
    }  else if (a1.textContent === "X"  && b1.textContent === "X" && c1.textContent === "X"){
        alert("Player X Wins")
        playerX.textContent = Number(playerX.textContent) + Number(1);
    } else if (a2.textContent === "X"  && b2.textContent === "X" && c2.textContent === "X"){
        alert("Player X Wins")
        playerX.textContent = Number(playerX.textContent) + Number(1);
    } else if (a3.textContent === "X"  && b3.textContent === "X" && c3.textContent === "X"){
        alert("Player X Wins")
        playerX.textContent = Number(playerX.textContent) + Number(1);
    } else if (a1.textContent === "X"  && b2.textContent === "X" && c3.textContent === "X"){
        alert("Player X Wins")
        playerX.textContent = Number(playerX.textContent) + Number(1);
    } else if (a3.textContent === "X"  && b2.textContent === "X" && c1.textContent === "X"){
        alert("Player X Wins")
        playerX.textContent = Number(playerX.textContent) + Number(1);
    } else if (a1.textContent === "O"  && a2.textContent === "O" && a3.textContent === "O") {
        alert("Player O Wins");
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (b1.textContent === "O"  && b2.textContent === "O" && b3.textContent === "O"){
        alert("Player O Wins");
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (c1.textContent === "O"  && c2.textContent === "O" && c3.textContent === "O"){
        alert("Player O Wins")
        playerO.textContent = Number(playerO.textContent) + Number(1);
    }  else if (a1.textContent === "O"  && b1.textContent === "O" && c1.textContent === "O"){
        alert("Player O Wins")
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (a2.textContent === "O"  && b2.textContent === "O" && c2.textContent === "O"){
        alert("Player O Wins")
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (a3.textContent === "O"  && b3.textContent === "O" && c3.textContent === "O"){
        alert("Player O Wins")
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (a1.textContent === "O"  && b2.textContent === "O" && c3.textContent === "O"){
        alert("Player O Wins")
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (a3.textContent === "O"  && b2.textContent === "O" && c1.textContent === "O"){
        alert("Player O Wins")
        playerO.textContent = Number(playerO.textContent) + Number(1);
    } else if (counter === 9) {
        alert("ITS A DRAW")
        // counter = 0
    }  
    // }  else {
    //     alert("Draw"   // }
}

// if (alert("Player X Wins" === true)) {
//     console.log("true")
// }

function enableButtons() {
    a1.textContent = '';
    a2.textContent = '';
    a3.textContent = '';
    b1.textContent = '';
    b2.textContent = '';
    b3.textContent = '';
    c1.textContent = '';
    c2.textContent = '';
    c3.textContent = '';

    counter = 0;


}
resetBtn.addEventListener('click', enableButtons);



a1.addEventListener('click', play);
a2.addEventListener('click', play);
a3.addEventListener('click', play);
b1.addEventListener('click', play);
b2.addEventListener('click', play);
b3.addEventListener('click', play);
c1.addEventListener('click', play);
c2.addEventListener('click', play);
c3.addEventListener('click', play);

// function playerO(event){ ///
    
//     var userClick = event.target;
//     userClick.disabled = true;
//     userClick.textContent = 'O';
// }

// a1.addEventListener('click', playerO);


    

// if (a1.textContent === "X") {
//     alert("winner");

// if (a1.textContent === "X" || "O"){
//     var userClick = event.target
//     userClick.disabled = true;
// } else if (a2.textContent === "X" || "O") {

// } else if (a3.textContent === "X" || "O") {

// } else if (b1.textContent === "X" || "O") {

// } else if (b2.textContent === "X" || "O") {

// } else if (b3.textContent === "X" || "O") {

// } else if (c1.textContent === "X" || "O") {

// } else if (c2.textContent === "X" || "O") {

// } else if (c3.textContent === "X" || "O") {

// }

function aone () {
    a1.textContent = "X"
    a1.disabled = true;
}